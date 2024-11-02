export default function Output({ output }: any) {
    return output ? <p dangerouslySetInnerHTML={{ __html: output }}></p> : <></>;
}