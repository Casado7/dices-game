import React, { useEffect, useState } from 'react';

const GameHistory = ({ isGameOver }) => {
    const [history, setHistory] = useState([]);
    const [summary, setSummary] = useState({ wins: 0, losses: 0 });
    const [playerName, setPlayerName] = useState('Player 1');

    useEffect(() => {
        // Recuperar historial de partidas y resumen desde localStorage
        const savedHistory = JSON.parse(localStorage.getItem('history')) || [];
        const savedSummary = JSON.parse(localStorage.getItem('summary')) || { wins: 0, losses: 0 };
        
        setHistory(savedHistory);
        setSummary(savedSummary);
    }, [isGameOver]);

    return (
        <div>
            <h2>Game History</h2>
            <p><strong>Wins:</strong> {summary.wins}</p>
            <p><strong>Losses:</strong> {summary.losses}</p>

            <h3>Match Results</h3>
            {history.length > 0 ? (
                <>
                    {history.map((game, index) => (
                        <div key={index}>
                            <p><strong> {game.player1}</strong> - <strong>Score:</strong> {game.player1Score}</p>
                            <p><strong> {game.player2}</strong> - <strong>Score:</strong> {game.player2Score}</p>
                            <p><strong>Winner:</strong> {game.winner}</p>
                            <hr />
                        </div>
                    ))}
                </>
            ) : (
                <p>No game history available.</p>
            )}
        </div>
    );
};

export default GameHistory;
