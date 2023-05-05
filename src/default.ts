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
以下是我定义好的服务任务和类的实现，使用这些服务一定要与对应的类绑定。\n\n| 服务任务名称 | 类的实现                                                |\n| ------------ | ------------------------------------------------------- |\n| 欢迎学生     | org.flowable.ui.task.application.Servicetask.WelStudent |\n| 欢迎老师     | org.flowable.ui.task.application.Servicetask.WelTeacher |\n| 关闭电灯     | org.flowable.ui.task.application.Servicetask.CloseLight |\n| 打开电灯     | org.flowable.ui.task.application.Servicetask.OpenLight |\n| 关闭风扇     | org.flowable.ui.task.application.Servicetask.WelTeacher |\n\n你必须根据待会儿我告诉你的场景，用我提供的服务任务构造业务流程，听明白了吗。
`
