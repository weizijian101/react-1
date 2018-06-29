webpackJsonp([0xb797708d4cca],{790:function(a,n){a.exports={data:{markdownRemark:{html:'<p>随着React 16发布在即，我们打算介绍一些在组件内部React如何处理JavaScript错误。这些改变包含在React 16的beta版本中，并将成为React 16的一部分。</p>\n<p><strong>顺便一提，<a href="https://github.com/facebook/react/issues/10294">你可以尝试我们刚发布了React 16的第一个测试版本！</a></strong></p>\n<h2 id="react-15及之前的行为"><a href="#react-15%E5%8F%8A%E4%B9%8B%E5%89%8D%E7%9A%84%E8%A1%8C%E4%B8%BA" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>React 15及之前的行为</h2>\n<p>过去，组件内部的JavaScript异常曾经常阻断了React内部状态并导致其在下一次渲染时<a href="https://github.com/facebook/react/issues/6895">触发了隐藏的错误</a>。这些错误常常是由应用程序代码中的早期错误所引起的，但React并未提供一种在组件里优雅处理的方式，也不会从异常中回复。</p>\n<h2 id="错误边界介绍"><a href="#%E9%94%99%E8%AF%AF%E8%BE%B9%E7%95%8C%E4%BB%8B%E7%BB%8D" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>错误边界介绍</h2>\n<p>UI部分的JavaScript异常不应阻断整个应用。为了为React用户解决这一问题，React 16引入了“错误边界（error boundary”）”这一新概念。</p>\n<p>错误边界作为React组件，用以<strong>捕获在子组件树种任何地方的JavaScript异常，打印这些错误，并展示备用UI</strong>而非让组件树崩溃。错误边界会捕获渲染期间，在生命周期方法中以及在其整个树的构造函数中的异常。</p>\n<p>若定义一个称为<code class="gatsby-code-text">componentDidCatch(error, info)</code>的新生命周期方法，则类组件将成为错误边界：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">class</span> <span class="token class-name">ErrorBoundary</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span> hasError<span class="token punctuation">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">componentDidCatch</span><span class="token punctuation">(</span>error<span class="token punctuation">,</span> info<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token comment">// Display fallback UI</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> hasError<span class="token punctuation">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token comment">// You can also log the error to an error reporting service</span>\n    <span class="token function">logErrorToMyService</span><span class="token punctuation">(</span>error<span class="token punctuation">,</span> info<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>hasError<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token comment">// You can render any custom fallback UI</span>\n      <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>Something went wrong<span class="token punctuation">.</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>children<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>而后可作为一个正常组件进行使用：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ErrorBoundary</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>MyWidget</span> <span class="token punctuation">/></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ErrorBoundary</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<p><code class="gatsby-code-text">componentDidCatch()</code>方法的作用类似于JavaScript的<code class="gatsby-code-text">catch {}</code>，但仅针对组件。仅有类组件可以成为错误边界。实际上，大多数时间你会想仅声明一次错误边界组件并在整个应用中使用。</p>\n<p>注意，<strong>错误边界仅可以捕获树中后代的组件错误</strong>。一个错误边界无法捕获其自身的错误。若错误边界尝试渲染错误信息失败，则该错误会传递至上方最接近的错误边界。而这也类似JavaScript中的<code class="gatsby-code-text">catch {}</code>块的工作方式。</p>\n<h2 id="live-demo"><a href="#live-demo" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Live Demo</h2>\n<p>查看<a href="https://github.com/facebook/react/issues/10294">在React 16测试版</a>中<a href="https://codepen.io/gaearon/pen/wqvxGa?editors=0010">关于如何声明和使用错误边界的例子</a>。</p>\n<h2 id="放置错误边界"><a href="#%E6%94%BE%E7%BD%AE%E9%94%99%E8%AF%AF%E8%BE%B9%E7%95%8C" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>放置错误边界</h2>\n<p>错误边界的粒度完全取决于你。你可能将其包装在顶层路由组件中并为用户展示“内部异常（Something went wrong）”的信息，类似于服务端框架处理崩溃。你可能也会在错误边界包装一些内部组件用以保护不会让应用的余下部分不会崩溃。</p>\n<h2 id="未捕获错误的新行为"><a href="#%E6%9C%AA%E6%8D%95%E8%8E%B7%E9%94%99%E8%AF%AF%E7%9A%84%E6%96%B0%E8%A1%8C%E4%B8%BA" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>未捕获错误的新行为</h2>\n<p>这一改变有一个重要的意义。<strong>作为React 16中不是由错误边界引起的错误将会使得整个React组件树被卸载。</strong></p>\n<p>我们曾争论这一决定，但在我们的经验中，将损坏的UI留在那里要比完全移除它要糟糕得多。例如，在类似Messenger这样的产品中留下可见的损坏的UI可能会导致一些人将信息发送给错误的人。类似地，对于支付应用来说显示错误的金额要比什么都不显示糟糕得多。</p>\n<p>这一改变意味着随着迁移至React 16，你们将会发现之前未留意过的应用程序存在的崩溃。增加错误边界能够让你在发生异常时提供更好的用户体验。</p>\n<p>例如，Facebook Messenger将边栏，信息面板，会话日志以及消息输入的内容包装到单独的错误边界中。若其中某一个组件的UI崩溃了，其余的仍能正常交互。</p>\n<p>我们也鼓励你使用JS错误报告服务（或自己构建）以让你能够了解在产品中产生的未处理的异常，并修复它们。</p>\n<h2 id="组件栈追踪"><a href="#%E7%BB%84%E4%BB%B6%E6%A0%88%E8%BF%BD%E8%B8%AA" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>组件栈追踪</h2>\n<p>React 16会打印所有在开发环节中发生在渲染过程的错误到控制台，即使应用程序意外地将他们吞了。除了错误信息和JavaScript堆栈，其还提供了组件栈追踪。闲杂你可以在组件树中精确地查看错误产生的地方：</p>\n<img src="/react/img/blog/error-boundaries-stack-trace.png" alt="Component stack traces in error message" />\n<p>你也可以在组件堆栈中查看文件名和行数。这一功能在<a href="https://github.com/facebookincubator/create-react-app">Create React App 项目</a>中默认开启：</p>\n<p><img\nsrc="/react/img/blog/error-boundaries-stack-trace-line-numbers.png" alt="Component stack traces with line numbers in error message" /></p>\n<p>若你不使用Create React App，你可以手动添加<a href="https://www.npmjs.com/package/babel-plugin-transform-react-jsx-source">该插件</a> 到你的Babel配置中。注意其仅能在开发环境中使用并<strong>禁止在生产环境中使用。</strong></p>\n<h2 id="为何不使用try--catch？"><a href="#%E4%B8%BA%E4%BD%95%E4%B8%8D%E4%BD%BF%E7%94%A8try--catch%EF%BC%9F" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>为何不使用<code class="gatsby-code-text">try</code> / <code class="gatsby-code-text">catch</code>？</h2>\n<p><code class="gatsby-code-text">try</code> / <code class="gatsby-code-text">catch</code> 很好但其仅适用于命令式的代码：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">try</span> <span class="token punctuation">{</span>\n  <span class="token function">showButton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token comment">// ...</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>然而，React组件是声明式的，并指定了什么应该被渲染：</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token punctuation">/></span></span>\n</code></pre>\n      </div>\n<p>错误边界保留了React声明式的特性，同时其行为和你期望的一直。例如，即使一个在<code class="gatsby-code-text">componentDidUpdate</code>周期由组件树内部底层的<code class="gatsby-code-text">setState</code>导致的错误，其仍能够正确地传递到最近的错误边界。</p>\n<h2 id="自react-15开始的命名变更"><a href="#%E8%87%AAreact-15%E5%BC%80%E5%A7%8B%E7%9A%84%E5%91%BD%E5%90%8D%E5%8F%98%E6%9B%B4" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>自React 15开始的命名变更</h2>\n<p>React 15 在不同的方法名下为错误边界包含了一个非常有限的支持：<code class="gatsby-code-text">unstable_handleError</code>。该方法不再生效，同时自React 16第一个测试版本发布开始，你需要在你的代码中将其修改为<code class="gatsby-code-text">componentDidCatch</code>。</p>\n<p>为应对这一改变，我们已提供了<a href="https://github.com/reactjs/react-codemod#error-boundaries">一份 codemod</a>以用于自动地迁移你的代码。</p>',excerpt:"随着React 16发布在即，我们打算介绍一些在组件内部React如何处理JavaScript错误。这些改变包含在React 16的beta版本中，并将成为React 16的一部分。 顺便一提， 你可以尝试我们刚发布了React 16的第一个测试版本！ React 15及之前的行为 过去，组件内部的JavaScript异常曾经常阻断了React内部状态并导致其在下一次渲染时 触发了隐藏的错误 。这些错误常常是由应用程序代码中的早期错误所引起的，但React并未提供一种在组件里优雅处理的方式，也不会从异常中回复。 错误边界介绍 UI部分的JavaScript异常不应阻断整个应用。为了为React用户解决这一问题，React 16引入了“错误边界（error boundary”）”这一新概念。 错误边界作为React组件，用以 捕获在子组件树种任何地方的JavaScript异常，打印这些错误，并展示备用UI…",frontmatter:{title:"Error Handle in React 16",next:null,prev:null,author:[{frontmatter:{name:"Dan Abramov",url:"https://twitter.com/dan_abramov"}}]},fields:{date:"July 26, 2017",path:"blog/2017-07-26-error-handle-in-react-16.md",slug:"/blog/2017/07/26/error-handle-in-react-16.html"}},allMarkdownRemark:{edges:[{node:{frontmatter:{title:"React v16.3.0: New lifecycles and context API"},fields:{slug:"/blog/2018/03/29/react-v-16-3.html"}}},{node:{frontmatter:{title:"Update on Async Rendering"},fields:{slug:"/blog/2018/03/27/update-on-async-rendering.html"}}},{node:{frontmatter:{title:"Sneak Peek: Beyond React 16"},fields:{slug:"/blog/2018/03/01/sneak-peek-beyond-react-16.html"}}},{node:{frontmatter:{title:"Behind the Scenes: Improving the Repository Infrastructure"},fields:{slug:"/blog/2017/12/15/improving-the-repository-infrastructure.html"}}},{node:{frontmatter:{title:"Introducing the React RFC Process"},fields:{slug:"/blog/2017/12/07/introducing-the-react-rfc-process.html"}}},{node:{frontmatter:{title:"React v16.2.0: Improved Support for Fragments"},fields:{slug:"/blog/2017/11/28/react-v16.2.0-fragment-support.html"}}},{node:{frontmatter:{title:"React v16.0"},fields:{slug:"/blog/2017/09/26/react-v16.0.html"}}},{node:{frontmatter:{title:"React v15.6.2"},fields:{slug:"/blog/2017/09/25/react-v15.6.2.html"}}},{node:{frontmatter:{title:"DOM Attributes in React 16"},fields:{slug:"/blog/2017/09/08/dom-attributes-in-react-16.html"}}},{node:{frontmatter:{title:"Error Handle in React 16"},fields:{slug:"/blog/2017/07/26/error-handle-in-react-16.html"}}}]}},pathContext:{slug:"/blog/2017/07/26/error-handle-in-react-16.html"}}}});
//# sourceMappingURL=path---blog-2017-07-26-error-handle-in-react-16-html-87cb820ee4f9eb8a464b.js.map