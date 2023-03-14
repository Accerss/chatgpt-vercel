export const defaultSetting = {
  continuousDialogue: true,
  archiveSession: false,
  openaiAPIKey: "",
  openaiAPITemperature: 60,
  systemRule: ""
}

export const defaultMessage = `
- 由 [OpenAI API (gpt-3.5-turbo)](https://platform.openai.com/docs/guides/chat) 和 [Vercel](http://vercel.com/) 提供支持。
- 由 [@ourongxing](https://github.com/ourongxing) 基于 [chatgpt-demo](https://github.com/ddiu8081/chatgpt-demo) 开发，查看 [源码](https://github.com/ourongxing/chatgpt-vercel)，欢迎自部署。
- 如果本项目对你有所帮助，请点击[更多功能](https://gwzone.oss-cn-beijing.aliyuncs.com/typora-user-images/image-20230314160259261.png)和[付费功能](https://gwzone.oss-cn-beijing.aliyuncs.com/typora-user-images/image-20230314160312122.png)。
- <kbd>Shift</kbd> + <kbd>Enter</kbd> 换行。开头输入 <kbd>/</kbd> 或者 <kbd>空格</kbd> 搜索 Prompt 预设。点击输入框滚动到底部。`
