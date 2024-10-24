import React from 'react';
import './Die.css';

export default function Die({ value, color }) {
    const getDots = (num) => {
        switch (num) {
            case 1:
                return [[1, 1]]; // Centro
            case 2:
                return [[0, 0], [2, 2]]; // Esquina superior izquierda y esquina inferior derecha
            case 3:
                return [[0, 0], [1, 1], [2, 2]]; // Esquina superior izquierda, centro y esquina inferior derecha
            case 4:
                return [[0, 0], [0, 2], [2, 0], [2, 2]]; // Esquinas
            case 5:
                return [[0, 0], [0, 2], [1, 1], [2, 0], [2, 2]]; // Esquinas y centro
            case 6:
                return [[0, 0], [0, 2], [1, 0], [1, 2], [2, 0], [2, 2]];  // Dos columnas
            default:
                return [];
        }
    };

    return (
        <div className="die" style={{ backgroundColor: color }}>
            {getDots(value).map(([row, col], index) => (
                <div key={index} className={`dot dot-${row}-${col}`}></div>
            ))}
        </div>
    );
}
