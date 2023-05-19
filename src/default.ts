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
- 如果本项目对你有所帮助，请点击[更多功能](https://gwzone.cn/about)。
- <kbd>Shift</kbd> + <kbd>Enter</kbd> 换行。开头输入 <kbd>/</kbd> 或者 <kbd>空格</kbd> 搜索 Prompt 预设。点击输入框滚动到底部。`

export const myMessage = `
以下是我定义好的用户任务name，请记住在flowable业务流程你只能用我提供的用户任务，注意机器人要先导航到指定位置才能后续操作，所有活动统一用用户任务。

| name          |
| --------------|
| 导航去客厅     |
| 导航去厨房     |
| 导航去卧室     | 
| OCR处方识别    |
| 打开客厅的灯   |
| 关闭客厅的灯   |
| 打开客厅的窗帘 | 
| 关闭客厅的窗帘 |
| 控制卧室的风扇 |

下面我会告诉你我的具体需求，用我提供的用户任务构造业务流程，你可以做到吗。
`
