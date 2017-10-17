webpackJsonp([0x845769c10c81],{"./node_modules/json-loader/index.js!./.cache/json/blog-2015-10-01-react-render-and-top-level-api-html.json":function(n,a){n.exports={data:{markdownRemark:{html:'<p>When you’re in React’s world you are just building components that fit into other components. Everything is a component. Unfortunately not everything around you is built using React. At the root of your tree you still have to write some plumbing code to connect the outer world into React.</p>\n<p>The primary API for rendering into the DOM looks like this:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code>ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>reactElement<span class="token punctuation">,</span> domContainerNode<span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>To update the properties of an existing component, you call render again with a new element.</p>\n<p>If you are rendering React components within a single-page app, you may need to plug into the app’s view lifecycle to ensure your app will invoke unmountComponentAtNode at the appropriate time. React will not automatically clean up a tree. You need to manually call:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code>ReactDOM<span class="token punctuation">.</span><span class="token function">unmountComponentAtNode</span><span class="token punctuation">(</span>domContainerNode<span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>This is important and often forgotten. Forgetting to call <code>unmountComponentAtNode</code> will cause your app to leak memory. There is no way for us to automatically detect when it is appropriate to do this work. Every system is different.</p>\n<p>It is not unique to the DOM. If you want to insert a React Native view in the middle of an existing iOS app you will hit similar issues.</p>\n<h2 id="helpers"><a href="#helpers" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Helpers</h2>\n<p>If you have multiple React roots, or a single root that gets deleted over time, we recommend that you always create your own wrapper API. These will all look slightly different depending on what your outer system looks like. For example, at Facebook we have a system that automatically ties into our page transition router to automatically call <code>unmountComponentAtNode</code>.</p>\n<p>Rather than calling <code>ReactDOM.render()</code> directly everywhere, consider writing/using a library that will manage mounting and unmounting within your application.</p>\n<p>In your environment you may want to always configure internationalization, routers, user data etc. If you have many different React roots it can be a pain to set up configuration nodes all over the place. By creating your own wrapper you can unify that configuration into one place.</p>\n<h2 id="object-oriented-updates"><a href="#object-oriented-updates" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Object Oriented Updates</h2>\n<p>If you call <code>ReactDOM.render</code> a second time to update properties, all your props are completely replaced.</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code>ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>App</span> <span class="token attr-name">locale</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>en-US<span class="token punctuation">"</span></span> <span class="token attr-name">userID</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> container<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment" spellcheck="true">// props.userID == 1</span>\n<span class="token comment" spellcheck="true">// props.locale == "en-US"</span>\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>App</span> <span class="token attr-name">userID</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">2</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> container<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment" spellcheck="true">// props.userID == 2</span>\n<span class="token comment" spellcheck="true">// props.locale == undefined ??!?</span>\n</code></pre>\n      </div>\n<p>In object-oriented programming, all state lives on each object instance and you apply changes incrementally by mutating that state, one piece at a time. If you are using React within an app that expects an object oriented API (for instance, if you are building a custom web component using React), it might be surprising/confusing to a user that setting a single property would wipe out all the other properties on your component.</p>\n<p>We used to have a helper function called <code>setProps</code> which allowed you to update only a few properties at a time. Unfortunately this API lived on a component instance, required React to keep this state internally and wasn’t very natural anyway. Therefore, we’re deprecating it and suggest that you build it into your own wrapper instead.</p>\n<p>Here’s some boilerplate to get you started. It is a 0.14 migration path for codebases using <code>setProps</code> and <code>replaceProps</code>.</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">class</span> <span class="token class-name">ReactComponentRenderer</span> <span class="token punctuation">{</span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span>klass<span class="token punctuation">,</span> container<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>klass <span class="token operator">=</span> klass<span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>container <span class="token operator">=</span> container<span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>props <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>component <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">replaceProps</span><span class="token punctuation">(</span>props<span class="token punctuation">,</span> callback<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>props <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setProps</span><span class="token punctuation">(</span>props<span class="token punctuation">,</span> callback<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">setProps</span><span class="token punctuation">(</span>partialProps<span class="token punctuation">,</span> callback<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>klass <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      console<span class="token punctuation">.</span><span class="token function">warn</span><span class="token punctuation">(</span>\n        <span class="token string">\'setProps(...): Can only update a mounted or \'</span> <span class="token operator">+</span>\n        <span class="token string">\'mounting component. This usually means you called setProps() on \'</span> <span class="token operator">+</span>\n        <span class="token string">\'an unmounted component. This is a no-op.\'</span>\n      <span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token keyword">return</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n    Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">,</span> partialProps<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">var</span> element <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>klass<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>component <span class="token operator">=</span> ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>element<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>container<span class="token punctuation">,</span> callback<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">unmount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    ReactDOM<span class="token punctuation">.</span><span class="token function">unmountComponentAtNode</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>container<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>klass <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Object-oriented APIs don’t look like that though. They use setters and methods. I think we can do better. If you know more about the component API that you’re rendering, you can create a more natural object-oriented API around your React component.</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token keyword">class</span> <span class="token class-name">ReactVideoPlayer</span> <span class="token punctuation">{</span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> container<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>_container <span class="token operator">=</span> container<span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>_url <span class="token operator">=</span> url<span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>_isPlaying <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">_render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">_render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>VideoPlayer</span> <span class="token attr-name">url</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>_url<span class="token punctuation">}</span></span> <span class="token attr-name">playing</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>_isPlaying<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span>_container\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">get</span> <span class="token function">url</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_url<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token keyword">set</span> <span class="token function">url</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>_url <span class="token operator">=</span> value<span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">_render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">play</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>_isPlaying <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">_render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">pause</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>_isPlaying <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">_render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    ReactDOM<span class="token punctuation">.</span><span class="token function">unmountComponentAtNode</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>_container<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>This example shows how to provide an imperative API on top of a declarative one. Similarly, the reverse can be done, and a declarative wrapper can be used when exposing a Web Component as a React component.</p>',excerpt:"When you’re in React’s world you are just building components that fit into other components. Everything is a component. Unfortunately not everything around you is built using React. At the root of your tree you still have to write some plumbing code to connect the outer world into React. The primary API for rendering into the DOM looks like this: To update the properties of an existing component, you call render again with a new element. If you are rendering React components within a single…",frontmatter:{title:"ReactDOM.render and the Top Level React API",next:null,prev:null,author:[{frontmatter:{name:"Jim Sproch",url:"http://www.jimsproch.com"}},{frontmatter:{name:"Sebastian Markbåge",url:"https://twitter.com/sebmarkbage"}}]},fields:{date:"September 30, 2015",path:"blog/2015-10-01-react-render-and-top-level-api.md",slug:"/blog/2015/10/01/react-render-and-top-level-api.html"}},allMarkdownRemark:{edges:[{node:{frontmatter:{title:"React v16.0"},fields:{slug:"/blog/2017/09/26/react-v16.0.html"}}},{node:{frontmatter:{title:"React v15.6.2"},fields:{slug:"/blog/2017/09/25/react-v15.6.2.html"}}},{node:{frontmatter:{title:"DOM Attributes in React 16"},fields:{slug:"/blog/2017/09/08/dom-attributes-in-react-16.html"}}},{node:{frontmatter:{title:"Error Handling in React 16"},fields:{slug:"/blog/2017/07/26/error-handling-in-react-16.html"}}},{node:{frontmatter:{title:"Error Handle in React 16"},fields:{slug:"/blog/2017/07/26/error-handle-in-react-16.html"}}},{node:{frontmatter:{title:"React v15.6.0"},fields:{slug:"/blog/2017/06/13/react-v15.6.0.html"}}},{node:{frontmatter:{title:"What's New in Create React App"},fields:{slug:"/blog/2017/05/18/whats-new-in-create-react-app.html"}}},{node:{frontmatter:{title:"React v15.5.0"},fields:{slug:"/blog/2017/04/07/react-v15.5.0.html"}}},{node:{frontmatter:{title:"React v15.4.0"},fields:{slug:"/blog/2016/11/16/react-v15.4.0.html"}}},{node:{frontmatter:{title:"Our First 50,000 Stars"},fields:{slug:"/blog/2016/09/28/our-first-50000-stars.html"}}}]}},pathContext:{slug:"/blog/2015/10/01/react-render-and-top-level-api.html"}}}});
//# sourceMappingURL=path---blog-2015-10-01-react-render-and-top-level-api-html-f6c163628a8c4b3283c4.js.map