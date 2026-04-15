export type Project = {
  name: string;
  summary: string;
  stack: string[];
  focus: string;
  outcome: string;
  highlights?: string[];
  link?: string;
};

export const projects: Project[] = [
  {
    name: 'conversation-about-ai-workflow',
    summary: '一套面向 AI 工作流审计的工程系统，覆盖配置检查、Web 入口、Rust 审计核心和结构化报告。',
    stack: ['Bash', 'PowerShell', 'Next.js 15', 'React 19', 'Rust', 'Axum', 'Turbo'],
    focus: '把脚本审计、可视化入口和核心服务串成一条完整的 AI workflow 治理链路。',
    outcome: '展示从方法论到系统实现的闭环，而不是单点 demo。',
    highlights: [
      '多工具配置审计',
      '本地 Web 操作入口',
      'Rust 核心统一结果输出'
    ]
  }
];
