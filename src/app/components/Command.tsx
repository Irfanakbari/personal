import Input from "./Input";
import Output from "./Output";

export default function Command({ command, output, onSubmit }: any) {
    return (
        <div>
            <Input command={command} onSubmit={(command: string) => onSubmit(command)} />
            {output && <Output output={output} />}
        </div>
    );
}