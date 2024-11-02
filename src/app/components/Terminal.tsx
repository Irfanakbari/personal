import { useRef, useState } from "react";
import { CONTENTS } from "../utils/commandHelper";
import Command from "./Command";
import styles from "./Terminal.module.css";

type CommandKey = keyof typeof CONTENTS;

export default function Terminal() {
    const [commands, setCommands] = useState<{ command: string; output: string }[]>([]);
    const [loading, setLoading] = useState(false);
    const terminalRef = useRef<HTMLDivElement>(null);

    const escapeHTML = (str: string) =>
        str
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");

    const addCommand = async (command: string) => {
        setLoading(true);
        setCommands([...commands, { command, output: "Loading..." }]);

        let output: string;
        if (command in CONTENTS) {
            output = await (CONTENTS[command as CommandKey] as () => Promise<string>)();
        } else if (command === "clear") {
            setLoading(false);
            return setCommands([]);
        } else {
            output = CONTENTS.error(escapeHTML(command));
        }

        setLoading(false);
        setCommands([...commands.slice(0, commands.length), { command, output }]);
        if (terminalRef.current) {
            terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
    };

    return (
        <div className={styles.terminal} ref={terminalRef}>
            {commands.map(({ command, output }, index) => (
                <Command command={command} output={output} key={index} />
            ))}
            {!loading && <Command onSubmit={(command: string) => addCommand(command)} />}
        </div>
    );
}
