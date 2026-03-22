"use client";

import { useEffect, useRef } from "react";
import { Application } from "@hotwired/stimulus";
import TerminalController from "@/components/terminal-controller";

type BlogForTerminal = {
  title: string;
  slug: string;
  url: string;
  date: string;
  snippet: string;
  image: string;
  content: string;
};

type TerminalProject = {
  name: string;
  url: string;
  year: number;
  desc: string;
};

type Props = {
  blogs: BlogForTerminal[];
  allBlogs: BlogForTerminal[];
  projects: TerminalProject[];
  aboutPath: string;
  homePath: string;
  chatPath: string;
};

export default function TerminalClient({ blogs, allBlogs, projects, aboutPath, homePath, chatPath }: Props) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!rootRef.current) return;

    const app = Application.start();
    app.register("terminal", TerminalController);

    return () => {
      app.stop();
    };
  }, []);

  return (
    <div
      ref={rootRef}
      className="terminal-fullscreen"
      data-controller="terminal"
      data-terminal-blogs-value={JSON.stringify(blogs)}
      data-terminal-all-blogs-value={JSON.stringify(allBlogs)}
      data-terminal-projects-value={JSON.stringify(projects)}
      data-terminal-about-path-value={aboutPath}
      data-terminal-home-path-value={homePath}
      data-terminal-chat-path-value={chatPath}
    >
      <nav className="terminal-nav">
        <div className="nav-label">
          <span className="blink-dot" />
          <span>zuozizhen</span>
        </div>
        <div className="nav-sep" />
        <div className="nav-chips">
          <button className="nav-chip" data-action="click->terminal#runCmd" data-cmd="/help"><span className="chip-icon">⌘</span> help</button>
          <button className="nav-chip" data-action="click->terminal#runCmd" data-cmd="/blog"><span className="chip-icon">#</span> blog</button>
          <button className="nav-chip" data-action="click->terminal#runCmd" data-cmd="/projects"><span className="chip-icon">#</span> projects</button>
          <button className="nav-chip" data-action="click->terminal#runCmd" data-cmd="/resources"><span className="chip-icon">#</span> resources</button>
          <button className="nav-chip" data-action="click->terminal#runCmd" data-cmd="/contact"><span className="chip-icon">#</span> contact</button>
          <button className="nav-chip" data-action="click->terminal#runCmd" data-cmd="/home"><span className="chip-icon">#</span> home</button>
        </div>
      </nav>

      <div className="terminal-pane" style={{ height: "calc(100vh - 37px)" }}>
        <div className="terminal-output-area" data-terminal-target="body">
          <div data-terminal-target="output" />
        </div>
        <div className="terminal-input-block">
          <div className="terminal-input-editor">
            <div className="input-editor-top">
              <span className="input-path">~/zuozizhen</span>
              <span className="input-branch">⎇ main</span>
            </div>
            <div className="input-editor-row">
              <span className="syn-prompt">➜&nbsp;</span>
              <input
                type="text"
                data-terminal-target="input"
                data-action="keydown->terminal#handleKey compositionstart->terminal#compositionStart compositionend->terminal#compositionEnd"
                autoFocus
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck={false}
                placeholder="输入 / 开头执行命令，或直接聊天"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
