
import { FileBlockProps } from "@githubnext/blocks";

export default function InstruqtBlock(props: FileBlockProps) {
  return (
    <div>
      <h1>Instruqt Playground</h1>
      <iframe
        src="https://play.instruqt.com/embed/gregorio-test/tracks/repo-playground-poc-bun?token=em_hXRPTI6f6oLxqYmU"
        title="Embedded Website"
        width="1140"
        height="640"
        className="iframe-no-border"
        sandbox="allow-forms allow-modals allow-popups allow-same-origin allow-scripts"
        allowFullScreen
      ></iframe>
    </div>
  );
}
