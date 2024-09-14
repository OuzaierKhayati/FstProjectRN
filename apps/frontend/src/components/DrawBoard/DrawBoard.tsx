import { socket } from '@/services/socket.service';
import React, { useRef, useState, useEffect } from 'react';

interface DrawPoint {
  x: number;
  y: number;
  isDrawing: boolean;
  strokeColor?: string;
}

const DrawBoard: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null);
  const [drawings, setDrawings] = useState<DrawPoint[]>([]); // To store drawing paths
  const [strokeColor, setStrokeColor] = useState('#000000');

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const context = canvas.getContext('2d');
      canvas.width = canvas.parentElement?.clientWidth || 0;
      canvas.height = canvas.parentElement?.clientHeight || 0;
      if (context) {
        context.strokeStyle = '#000000'; // Black color
        context.lineWidth = 2; // Line thickness
        context.lineJoin = 'round';
        context.lineCap = 'round';
        setCtx(context);
      }
    }
    // Set random stroke color
    const colors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setStrokeColor(randomColor);
  }, []);

  useEffect(() => {
    // Redraw the canvas after every render
    if (ctx) {
      ctx.clearRect(
        0,
        0,
        canvasRef.current?.width || 0,
        canvasRef.current?.height || 0
      ); // Clear screen
      // Redraw all the paths
      drawings.forEach((point, index) => {
        if (index === 0 || point.isDrawing === false) {
          ctx.beginPath();
          ctx.moveTo(point.x, point.y);
        } else {
          ctx.lineTo(point.x, point.y);
          ctx.strokeStyle = point.strokeColor || strokeColor;
          ctx.stroke();
        }
      });
    }
  }, [ctx, drawings, strokeColor]);

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement>) => {
    setIsDrawing(true);
    const newPoint = {
      x: e.nativeEvent.offsetX,
      y: e.nativeEvent.offsetY,
      strokeColor,
      isDrawing: false,
    };
    setDrawings((prev) => [...prev, newPoint]);
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const newPoint = {
      x: e.nativeEvent.offsetX,
      y: e.nativeEvent.offsetY,
      strokeColor,
      isDrawing: true,
    };
    setDrawings((prev) => [...prev, newPoint]);
  };

  const stopDrawing = () => {
    setIsDrawing(false);
    socket.emit('draw', drawings);
  };

  useEffect(() => {
    socket.on('draw', (msg: DrawPoint[]) => {
      setDrawings(msg);
    });

    return () => {
      socket.off('draw');
    };
  }, []);

  return (
    <div
      className="flex items-center justify-center bg-gray-100"
      style={{
        height: '500px',
        width: '500px',
      }}
    >
      <canvas
        ref={canvasRef}
        className="rounded-md border-2 border-gray-400 bg-white"
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseLeave={stopDrawing}
      ></canvas>
    </div>
  );
};

export default DrawBoard;
