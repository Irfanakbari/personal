"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./Input.module.css";

interface InputProps {
    command: string;
    onSubmit: (command: string) => void;
}

export default function Input({ command, onSubmit }: InputProps) {
    const [_command, setCommand] = useState(command || "");
    const inputRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(_command);
        setCommand("");
    };

    useEffect(() => {
        if (!command && inputRef.current) {
            inputRef.current.focus();
        }
    }, [command]);

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="command">
                <span style={{ color: "#ff9e64" }}>λ</span> ::{" "}
                <span style={{ color: "var(--primary)" }}>~</span>{" "}
                <span style={{ color: "var(--secondary)" }}>&gt;&gt;</span>
            </label>

            <input
                type="text"
                className={styles.input}
                value={_command}
                onChange={(e) => setCommand(e.target.value)}
                disabled={!!command}
                ref={inputRef}
                autoFocus={!command}
            />
        </form>
    );
}
