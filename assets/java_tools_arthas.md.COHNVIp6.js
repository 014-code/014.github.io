import{_ as a,o as i,c as n,a0 as p}from"./chunks/framework.CSGB4SNl.js";const F=JSON.parse('{"title":"Arthas 线上问题诊断实战","description":"","frontmatter":{},"headers":[],"relativePath":"java/tools/arthas.md","filePath":"java/tools/arthas.md"}'),l={name:"java/tools/arthas.md"};function h(t,s,e,k,r,d){return i(),n("div",null,[...s[0]||(s[0]=[p(`<h1 id="arthas-线上问题诊断实战" tabindex="-1">Arthas 线上问题诊断实战 <a class="header-anchor" href="#arthas-线上问题诊断实战" aria-label="Permalink to &quot;Arthas 线上问题诊断实战&quot;">​</a></h1><blockquote><p>阿里巴巴开源 Java 诊断工具，线上问题排查利器</p></blockquote><h2 id="一、为什么需要-arthas" tabindex="-1">一、为什么需要 Arthas <a class="header-anchor" href="#一、为什么需要-arthas" aria-label="Permalink to &quot;一、为什么需要 Arthas&quot;">​</a></h2><p>在分布式系统开发中，我们经常遇到这样的困境：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>开发环境正常，测试环境正常，线上环境出问题</span></span>
<span class="line"><span>日志看不到关键信息，重启后问题无法复现</span></span>
<span class="line"><span>服务器 CPU 飙升，内存泄漏，接口响应慢</span></span></code></pre></div><p>传统的排查方式存在诸多限制：</p><table tabindex="0"><thead><tr><th>排查方式</th><th>局限性</th></tr></thead><tbody><tr><td>日志排查</td><td>需要预先埋点，问题发生前可能没记录</td></tr><tr><td>调试 debug</td><td>无法在生产环境使用</td></tr><tr><td>JVisualVM</td><td>需要打开端口，配置复杂</td></tr><tr><td>重新部署</td><td>问题可能无法复现，治标不治本</td></tr></tbody></table><p>Arthas 的核心优势：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>1. 无侵入：无需修改代码，无需重启服务</span></span>
<span class="line"><span>2. 功能强大：支持反编译、方法追踪、动态代理</span></span>
<span class="line"><span>3. 实时性：在线诊断，所见即所得</span></span>
<span class="line"><span>4. 跨语言：支持 Java、Scala 等 JVM 语言</span></span></code></pre></div><h2 id="二、安装与启动" tabindex="-1">二、安装与启动 <a class="header-anchor" href="#二、安装与启动" aria-label="Permalink to &quot;二、安装与启动&quot;">​</a></h2><h3 id="_2-1-快速启动" tabindex="-1">2.1 快速启动 <a class="header-anchor" href="#_2-1-快速启动" aria-label="Permalink to &quot;2.1 快速启动&quot;">​</a></h3><p>Arthas 支持多种启动方式：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 方式一：curl 快速启动（推荐）</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -L</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://arthas.aliyun.com/install.sh</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> sh</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 启动 Arthas</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">java</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -jar</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> arthas-boot.jar</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 方式二：直接下载完整包</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">wget</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://arthas.aliyun.com/arthas-boot.jar</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 启动</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">java</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -jar</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> arthas-boot.jar</span></span></code></pre></div><h3 id="_2-2-attach-到目标进程" tabindex="-1">2.2 .attach 到目标进程 <a class="header-anchor" href="#_2-2-attach-到目标进程" aria-label="Permalink to &quot;2.2 .attach 到目标进程&quot;">​</a></h3><p>启动后会显示当前 JVM 进程列表：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>[INFO] arthas home: /root/.arthas/lib/3.7.2</span></span>
<span class="line"><span>[INFO] Try to attach process 12345</span></span>
<span class="line"><span>[INFO] Attach success.</span></span>
<span class="line"><span>[INFO] arthas client connect to arthas server successfully.</span></span>
<span class="line"><span>  ,---.  ,------. ,--------.,--.  ,--.  ,---.   ,---.</span></span>
<span class="line"><span> /  O  \\ |  .--. &#39;&#39;--.  .--&#39;|  &#39;--&#39;  | /  O  \\ &#39;   .-&#39;</span></span>
<span class="line"><span>|  .-.  ||  &#39;--&#39;.&#39;   |  |   |  .--.  ||  .-.  |\`.  \`-.</span></span>
<span class="line"><span>|  | |  ||  |\\  \\    |  |   |  |  |  ||  | |  |.-&#39;    |</span></span>
<span class="line"><span>\`--&#39; \`--&#39;\`--&#39; &#39;--&#39;   \`--&#39;   \`--&#39;  \`--&#39;\`--&#39; \`--&#39;\`-----&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>wiki      https://arthas.aliyun.com/doc</span></span>
<span class="line"><span>tutorials https://arthas.aliyun.com/doc/arthas-tutorials.html</span></span>
<span class="line"><span>version   3.7.2</span></span>
<span class="line"><span>main_class com.example.Application</span></span>
<span class="line"><span>pid       12345</span></span>
<span class="line"><span>time      2024-01-15 10:30:00</span></span></code></pre></div><h3 id="_2-3-web-console-方式" tabindex="-1">2.3 Web Console 方式 <a class="header-anchor" href="#_2-3-web-console-方式" aria-label="Permalink to &quot;2.3 Web Console 方式&quot;">​</a></h3><p>通过浏览器访问：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 启动时指定端口</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">java</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -jar</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> arthas-boot.jar</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --telnet-port</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3658</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --http-port</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 8563</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 访问 Web 控制台</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># http://localhost:8563</span></span></code></pre></div><h2 id="三、常用命令详解" tabindex="-1">三、常用命令详解 <a class="header-anchor" href="#三、常用命令详解" aria-label="Permalink to &quot;三、常用命令详解&quot;">​</a></h2><h3 id="_3-1-dashboard-实时监控面板" tabindex="-1">3.1 dashboard - 实时监控面板 <a class="header-anchor" href="#_3-1-dashboard-实时监控面板" aria-label="Permalink to &quot;3.1 dashboard - 实时监控面板&quot;">​</a></h3><p>查看 JVM 整体运行状态：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 进入 Arthas 后直接执行</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">dashboard</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 输出效果：</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 全局看板：</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#   PID      CPU(%)  RSS(M)   VSZ(M)    线程数</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#   12345    85.2    512.0    1024.0    45</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 线程信息：</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#   ID      CPU(%)  STATE    NAME</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#   1       0.1     RUNNABLE main</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#   12      85.0    RUNNING  http-nio-8080-ClientPoller</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#   15      2.3     WAITING  C2 CompilerThread0</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 内存信息：</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#   HEAP    used    total    max     usage</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#   eden    256M    512M     512M    50.0%</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#   old     128M    256M     512M    25.0%</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># GC 统计：</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#   young gc   156   0.5s</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#   full gc    3    2.3s</span></span></code></pre></div><p>dashboard 包含四个核心面板：</p><table tabindex="0"><thead><tr><th>面板</th><th>显示内容</th><th>用途</th></tr></thead><tbody><tr><td>JVM 概览</td><td>CPU、内存、负载</td><td>快速定位资源瓶颈</td></tr><tr><td>线程状态</td><td>RUNNING、WAITING、阻塞</td><td>排查线程问题</td></tr><tr><td>内存分布</td><td>Eden、Survivor、Old</td><td>内存泄漏分析</td></tr><tr><td>GC 统计</td><td>频率、耗时</td><td>GC 调优参考</td></tr></tbody></table><h3 id="_3-2-thread-线程分析" tabindex="-1">3.2 thread - 线程分析 <a class="header-anchor" href="#_3-2-thread-线程分析" aria-label="Permalink to &quot;3.2 thread - 线程分析&quot;">​</a></h3><p>查看线程状态和 CPU 占用：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 查看所有线程</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">thread</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 查看 CPU 占用最高的线程</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">thread</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -n</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 5</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 查看指定线程的堆栈</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">thread</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 15</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 查找线程阻塞的代码位置</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">thread</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -b</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 示例输出：</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&quot;http-nio-8080-ClientPoller&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Id=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">12</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> cpuUsage=85.0%</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    java.base@17.0.2/sun.nio.ch.EPollArrayWrapper.epollWait(Native</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Method</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    java.base@17.0.2/sun.nio.ch.EPollArrayWrapper.epollWait(EPollArrayWrapper.java:509</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    java.base@17.0.2/sun.nio.ch.EPollArrayWrapper.interrupt(EPollArrayWrapper.java:288</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    java.base@17.0.2/sun.nio.ch.SocketChannelImpl.read(SocketChannelImpl.java:246</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    java.base@17.0.2/sun.nio.ch.SocketChannelImpl.read(SocketChannelImpl.java:195</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    org.apache.nio.core.NioChannelWrapper.read(NioChannelWrapper.java:89</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    com.example.handler.WebSocketHandler.onMessage(WebSocketHandler.java:45</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><h3 id="_3-3-jad-反编译-class" tabindex="-1">3.3 jad - 反编译 class <a class="header-anchor" href="#_3-3-jad-反编译-class" aria-label="Permalink to &quot;3.3 jad - 反编译 class&quot;">​</a></h3><p>在线查看源码，无需依赖源码：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 反编译指定类</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">jad</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> com.example.service.OrderService</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 反编译并显示源码行号</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">jad</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --source-only</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> com.example.service.OrderService</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 反编译指定方法</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">jad</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> com.example.service.OrderService</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> calculatePrice</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 示例输出：</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/*</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> *</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Decompiled</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> with</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> CFR.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> */</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">package</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> com.example.service</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">import</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> org.springframework.stereotype.Service</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">@Service</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">public</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> class</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> OrderService</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    public</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> double</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> calculatePrice</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Long</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> orderId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">{</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        Order</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> order</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> this.orderMapper.selectById</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">orderId</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">order</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ==</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">            throw</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> new</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> RuntimeException</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&quot;订单不存在&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> order.getAmount</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">*</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> order.getDiscount</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="_3-4-watch-方法调用监控" tabindex="-1">3.4 watch - 方法调用监控 <a class="header-anchor" href="#_3-4-watch-方法调用监控" aria-label="Permalink to &quot;3.4 watch - 方法调用监控&quot;">​</a></h3><p>观察方法执行的入参和返回值：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 监控方法调用</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">watch</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> com.example.service.OrderService</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> calculatePrice</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;{params, returnObj}&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 只看入参</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">watch</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> com.example.service.OrderService</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> calculatePrice</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;params&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 只看返回值</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">watch</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> com.example.service.OrderService</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> calculatePrice</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;returnObj&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 监控异常信息</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">watch</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> com.example.service.OrderService</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> calculatePrice</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;{params, returnObj, throwExp}&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 指定监控条件（条件表达式）</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">watch</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> com.example.service.OrderService</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> calculatePrice</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;{params, returnObj}&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;params[0] &gt; 1000&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 监听方法执行后，返回值和耗时</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">watch</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> com.example.service.OrderService</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> calculatePrice</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;{params, returnObj, cost}&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -x</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 参数说明：</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># -x 3：展开深度，默认1层</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 条件表达式：params[0] &gt; 1000 只监控订单ID大于1000的调用</span></span></code></pre></div><p>watch 命令常用场景：</p><table tabindex="0"><thead><tr><th>场景</th><th>命令示例</th></tr></thead><tbody><tr><td>监控关键参数</td><td><code>watch com.example.Controller * &quot;{params}&quot;</code></td></tr><tr><td>监控异常</td><td><code>watch com.example.Service * &quot;{throwExp}&quot;</code></td></tr><tr><td>性能分析</td><td><code>watch com.example.Service * &quot;{params, returnObj, cost}&quot;</code></td></tr><tr><td>条件过滤</td><td><code>watch com.example.Service method &quot;params[0] &gt; 100&quot;</code></td></tr></tbody></table><h3 id="_3-5-trace-方法调用链路追踪" tabindex="-1">3.5 trace - 方法调用链路追踪 <a class="header-anchor" href="#_3-5-trace-方法调用链路追踪" aria-label="Permalink to &quot;3.5 trace - 方法调用链路追踪&quot;">​</a></h3><p>追踪方法调用的完整链路：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 追踪方法调用耗时</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">trace</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> com.example.service.OrderService</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> calculatePrice</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 只显示耗时超过 100ms 的调用</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">trace</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> com.example.service.OrderService</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> calculatePrice</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;#cost &gt; 100&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 追踪到深层方法</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">trace</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> com.example.service.OrderService</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 追踪结果示例：</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">\`</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">---ts</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">2024-01-15 </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">10:30:00</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">time_cost</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">245ms </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">[1080b]</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> ---</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> execution path: A</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">    \`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---[0.123ms]</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> com.example.service.OrderService:123</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        \`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---[0.045ms]</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> com.example.mapper.OrderMapper:45</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            \`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---[0.032ms]</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> getOrderById</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()     </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">//</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 耗时最短</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">                \`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---[0.015ms]</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> SQL: SELECT </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">*</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> FROM order WHERE id = ?</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        \`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---[0.056ms]</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> com.example.service.DiscountService:67</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            \`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---[0.020ms]</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> getDiscount()</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            \`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---[0.030ms]</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> calculateFinalPrice</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        \`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---[0.045ms]</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> com.example.service.PromotionService:89</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            \`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---[0.025ms]</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> checkPromotion</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">            \`</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">---[0.018ms]</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> applyPromotion()</span></span></code></pre></div><h3 id="_3-6-stack-方法调用栈追踪" tabindex="-1">3.6 stack - 方法调用栈追踪 <a class="header-anchor" href="#_3-6-stack-方法调用栈追踪" aria-label="Permalink to &quot;3.6 stack - 方法调用栈追踪&quot;">​</a></h3><p>查看方法是被谁调用的：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 查看方法调用栈</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">stack</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> com.example.service.OrderService</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> calculatePrice</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 指定条件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">stack</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> com.example.service.OrderService</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> calculatePrice</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;#cost &gt; 50&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 输出示例：</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">stack</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> com.example.service.OrderService</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> calculatePrice</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ts</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">2024-01-15</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> 10:30:00</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    @com.example.controller.OrderController.queryOrder</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        params:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [1001]</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        location:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> com.example.controller.OrderController:45</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    @com.example.controller.OrderController.createOrder</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        params:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [1002]</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        location:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> com.example.controller.OrderController:78</span></span></code></pre></div><h3 id="_3-7-tt-时间隧道-记录方法调用" tabindex="-1">3.7 tt - 时间隧道（记录方法调用） <a class="header-anchor" href="#_3-7-tt-时间隧道-记录方法调用" aria-label="Permalink to &quot;3.7 tt - 时间隧道（记录方法调用）&quot;">​</a></h3><p>多次调用方法，查看历史调用记录：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 记录方法调用</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tt</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> com.example.service.OrderService</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> calculatePrice</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 停止记录</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tt</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -t</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 查看历史调用列表</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tt</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -l</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 查看指定调用的详细信息</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tt</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -i</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1001</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 重新执行指定调用</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tt</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -i</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1001</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># tt 常用选项：</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># -t：开始记录方法调用</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># -l：列出所有记录的调用</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># -i：查看指定调用的详情</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># -p：重新执行指定调用（重放）</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># -x：展开深度</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 示例：</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tt</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -t</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> com.example.service.OrderService</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> calculatePrice</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -n</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 50</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 输出：</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#  INDEX   TIMESTAMP            COST(ms)  OBJECT   CLASS</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#  1001    2024-01-15 10:30:00  45        NULL     OrderService</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#  1002    2024-01-15 10:30:01  32        NULL     OrderService</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#  1003    2024-01-15 10:30:02  156       NULL     OrderService</span></span></code></pre></div><h3 id="_3-8-heapdump-堆内存导出" tabindex="-1">3.8 heapdump - 堆内存导出 <a class="header-anchor" href="#_3-8-heapdump-堆内存导出" aria-label="Permalink to &quot;3.8 heapdump - 堆内存导出&quot;">​</a></h3><p>导出堆内存快照，分析内存泄漏：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 导出堆内存</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">heapdump</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 导出到指定文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">heapdump</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /tmp/dump.hprof</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 只导出活跃对象</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">heapdump</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --live</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /tmp/live-dump.hprof</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 导出后使用 MAT (Memory Analyzer Tool) 分析</span></span></code></pre></div><h3 id="_3-9-ognl-动态表达式执行" tabindex="-1">3.9 ognl - 动态表达式执行 <a class="header-anchor" href="#_3-9-ognl-动态表达式执行" aria-label="Permalink to &quot;3.9 ognl - 动态表达式执行&quot;">​</a></h3><p>执行任意 Java 表达式，获取运行时信息：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 获取静态变量</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ognl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@com.example.config.Config@ENABLE_LOGIN&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 调用静态方法</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ognl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@java.lang.System@getProperty(&quot;java.version&quot;)&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 获取 Spring Bean</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ognl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@springContext.getBean(&quot;userService&quot;)&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 修改线上配置（谨慎使用）</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ognl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@com.example.config.Config@setEnableLogin(false)&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 查看当前所有 System Properties</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ognl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;#{sysProps = @java.lang.System@getProperties(), #sysProps}&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ognl 常用场景：</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># - 动态修改配置</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># - 获取运行时状态</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># - 调用任意方法</span></span></code></pre></div><h2 id="四、实战场景" tabindex="-1">四、实战场景 <a class="header-anchor" href="#四、实战场景" aria-label="Permalink to &quot;四、实战场景&quot;">​</a></h2><h3 id="_4-1-场景一-接口响应慢排查" tabindex="-1">4.1 场景一：接口响应慢排查 <a class="header-anchor" href="#_4-1-场景一-接口响应慢排查" aria-label="Permalink to &quot;4.1 场景一：接口响应慢排查&quot;">​</a></h3><p>问题描述：用户反馈订单接口响应很慢，经常超时。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 1. 先用 dashboard 查看整体情况</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">dashboard</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 2. 发现某个线程 CPU 占用很高</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">thread</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -n</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 5</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 3. 追踪慢接口</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">trace</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> com.example.service.OrderService</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> calculatePrice</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;#cost &gt; 500&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 4. 定位到是数据库查询慢</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">watch</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> com.example.mapper.OrderMapper</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;params, returnObj&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;#cost &gt; 100&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 5. 查看具体 SQL</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">stack</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> com.example.mapper.OrderMapper.getOrderById</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 诊断结果：发现缺少索引，导致全表扫描</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 解决方案：添加数据库索引</span></span></code></pre></div><h3 id="_4-2-场景二-内存泄漏排查" tabindex="-1">4.2 场景二：内存泄漏排查 <a class="header-anchor" href="#_4-2-场景二-内存泄漏排查" aria-label="Permalink to &quot;4.2 场景二：内存泄漏排查&quot;">​</a></h3><p>问题描述：服务运行几天后内存持续增长，最终 OOM。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 1. 查看内存分布</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">memory</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 2. 观察 Old 区持续增长</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">dashboard</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 3. 手动触发 Full GC</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">gc</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 4. 导出堆内存分析</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">heapdump</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /tmp/heap.hprof</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 5. 或者在线查看对象数量</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ognl</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;{#map = new java.util.HashMap(), #map}&#39;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> java.lang.String</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;&lt;init&gt;&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 使用 MAT 分析 dump 文件：</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 1. 打开 MAT</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 2. Leak Suspects Report</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 3. 查看占用内存最大的对象</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 4. 定位泄漏代码</span></span></code></pre></div><h3 id="_4-3-场景三-线上代码热更新" tabindex="-1">4.3 场景三：线上代码热更新 <a class="header-anchor" href="#_4-3-场景三-线上代码热更新" aria-label="Permalink to &quot;4.3 场景三：线上代码热更新&quot;">​</a></h3><p>问题描述：发现线上代码有 bug，需要紧急修复。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 1. 先反编译确认当前代码</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">jad</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> com.example.service.OrderService</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 2. 查看需要修改的方法</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">jad</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> com.example.service.OrderService</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> calculatePrice</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 3. 使用 mc (memory compiler) 编译新代码</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mc</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /path/to/OrderService.java</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -d</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /tmp/</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 4. 使用 redefine 热更新</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">redefine</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /tmp/com/example/service/OrderService.class</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 注意：</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># - 不支持修改类结构（方法数、字段数）</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># - 不支持修改方法签名</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># - 多次 redefine 会有限制</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 更推荐的做法：</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 1. 使用 watch 确认问题</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 2. 在测试环境修复并测试</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 3. 重新打包发布</span></span></code></pre></div><h3 id="_4-4-场景四-监听参数定位问题" tabindex="-1">4.4 场景四：监听参数定位问题 <a class="header-anchor" href="#_4-4-场景四-监听参数定位问题" aria-label="Permalink to &quot;4.4 场景四：监听参数定位问题&quot;">​</a></h3><p>问题描述：订单金额计算异常，需要查看入参和返回值。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 监听订单计算方法</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">watch</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> com.example.service.OrderService</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> calculatePrice</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;{params, returnObj, throwExp}&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  -x</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  -n</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 10</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 输出：</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ts=2024-01-15 10:30:00</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#   params=[1001, 0.8]</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#   returnObj=799.2</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#   throwExp=NULL</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ts=2024-01-15 10:30:01</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#   params=[1002, 0.7]</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#   returnObj=699.3</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#   throwExp=NULL</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 监听异常</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">watch</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> com.example.service.OrderService</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> calculatePrice</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;{params, throwExp}&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;#throwExp != null&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  -n</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 5</span></span></code></pre></div><h3 id="_4-5-场景五-追踪方法调用链路" tabindex="-1">4.5 场景五：追踪方法调用链路 <a class="header-anchor" href="#_4-5-场景五-追踪方法调用链路" aria-label="Permalink to &quot;4.5 场景五：追踪方法调用链路&quot;">​</a></h3><p>问题描述：想知道订单接口被哪些地方调用。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 追踪所有调用链路</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">trace</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> com.example.service.OrderService</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -n</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 10</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 追踪到 Controller 层</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">stack</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> com.example.controller.OrderController</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;#methodName.contains(&#39;order&#39;)&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 查看最慢的调用</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">trace</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Service</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;#cost &gt; 200&quot;</span></span></code></pre></div><h2 id="五、进阶技巧" tabindex="-1">五、进阶技巧 <a class="header-anchor" href="#五、进阶技巧" aria-label="Permalink to &quot;五、进阶技巧&quot;">​</a></h2><h3 id="_5-1-批处理脚本" tabindex="-1">5.1 批处理脚本 <a class="header-anchor" href="#_5-1-批处理脚本" aria-label="Permalink to &quot;5.1 批处理脚本&quot;">​</a></h3><p>将常用命令保存为脚本：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 文件：order-service.sh</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#!/bin/bash</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;========== 订单服务诊断 ==========&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 查看 CPU 占用</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;\\n【线程 CPU 占用 Top 5】&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">thread</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -n</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 5</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 追踪慢接口</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;\\n【慢接口追踪】&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">trace</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> com.example.service.OrderService</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> *</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;#cost &gt; 100&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 监听关键方法</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;\\n【方法调用监控】&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">watch</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> com.example.service.OrderService</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> calculatePrice</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;{params, returnObj}&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">  &quot;#params[0] &gt; 1000&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  -x</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  -n</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 20</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 执行脚本</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">./order-service.sh</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> diagnosis-report.txt</span></span></code></pre></div><h3 id="_5-2-火焰图-flame-graph" tabindex="-1">5.2 火焰图（Flame Graph） <a class="header-anchor" href="#_5-2-火焰图-flame-graph" aria-label="Permalink to &quot;5.2 火焰图（Flame Graph）&quot;">​</a></h3><p>生成性能火焰图：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 1. 开启火焰图采集</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">profiler</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> start</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 2. 执行待测操作</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 3. 停止采集</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">profiler</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> stop</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 4. 生成火焰图</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">profiler</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> svg</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 或者指定采集时间</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">profiler</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> start</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --duration</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 60</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">profiler</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> stop</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 查看火焰图</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 火焰图展示了调用栈的深度和每个方法的 CPU 占用</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 宽度越大表示占用 CPU 越多</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 顶部是入口方法，底部是底层方法</span></span></code></pre></div><h3 id="_5-3-异步任务" tabindex="-1">5.3 异步任务 <a class="header-anchor" href="#_5-3-异步任务" aria-label="Permalink to &quot;5.3 异步任务&quot;">​</a></h3><p>Arthas 支持在后台执行任务：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 每 5 秒输出一次 thread 信息，共执行 10 次</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">thread</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -n</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 5</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -i</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 5000</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -c</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 10</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> thread-monitor.log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> &amp;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 监控方法调用，5 秒后自动退出</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">watch</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> com.example.Service</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> method</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;{params}&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -x</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -w</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 5</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 后台任务管理</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">jobs</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    # 查看后台任务</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">kill</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 停止后台任务</span></span></code></pre></div><h3 id="_5-4-权限控制" tabindex="-1">5.4 权限控制 <a class="header-anchor" href="#_5-4-权限控制" aria-label="Permalink to &quot;5.4 权限控制&quot;">​</a></h3><p>生产环境建议开启认证：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 启动 Arthas 时启用密码认证</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">java</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -jar</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> arthas-boot.jar</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  --password</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> arthas123</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> \\</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  --username</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> admin</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 禁用某些危险命令</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在 arthas.properties 中配置</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">disabled_commands</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ognl,heapdump,redefine</span></span></code></pre></div><h2 id="六、最佳实践" tabindex="-1">六、最佳实践 <a class="header-anchor" href="#六、最佳实践" aria-label="Permalink to &quot;六、最佳实践&quot;">​</a></h2><h3 id="_6-1-常用命令速查表" tabindex="-1">6.1 常用命令速查表 <a class="header-anchor" href="#_6-1-常用命令速查表" aria-label="Permalink to &quot;6.1 常用命令速查表&quot;">​</a></h3><table tabindex="0"><thead><tr><th>命令</th><th>用途</th><th>场景</th></tr></thead><tbody><tr><td>dashboard</td><td>整体监控</td><td>快速了解 JVM 状态</td></tr><tr><td>thread</td><td>线程分析</td><td>CPU 高、线程阻塞</td></tr><tr><td>trace</td><td>调用链路</td><td>定位慢接口</td></tr><tr><td>watch</td><td>方法监控</td><td>查看参数和返回值</td></tr><tr><td>tt</td><td>时间隧道</td><td>记录和回放调用</td></tr><tr><td>jad</td><td>反编译</td><td>查看当前代码</td></tr><tr><td>stack</td><td>调用栈</td><td>追踪方法调用者</td></tr><tr><td>ognl</td><td>动态执行</td><td>获取/修改运行时状态</td></tr><tr><td>heapdump</td><td>内存导出</td><td>内存泄漏分析</td></tr></tbody></table><h3 id="_6-2-问题排查思路" tabindex="-1">6.2 问题排查思路 <a class="header-anchor" href="#_6-2-问题排查思路" aria-label="Permalink to &quot;6.2 问题排查思路&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>遇到问题时的排查顺序：</span></span>
<span class="line"><span></span></span>
<span class="line"><span>1. 先看整体：dashboard</span></span>
<span class="line"><span>   - CPU 是否异常</span></span>
<span class="line"><span>   - 内存是否增长</span></span>
<span class="line"><span>   - GC 是否频繁</span></span>
<span class="line"><span></span></span>
<span class="line"><span>2. 再看线程：thread</span></span>
<span class="line"><span>   - 是否有线程 CPU 很高</span></span>
<span class="line"><span>   - 是否有线程阻塞</span></span>
<span class="line"><span>   - 线程数是否过多</span></span>
<span class="line"><span></span></span>
<span class="line"><span>3. 最后追踪：trace/watch</span></span>
<span class="line"><span>   - 定位具体方法</span></span>
<span class="line"><span>   - 查看参数和返回值</span></span>
<span class="line"><span>   - 追踪调用链路</span></span>
<span class="line"><span></span></span>
<span class="line"><span>4. 如需深度分析</span></span>
<span class="line"><span>   - heapdump + MAT</span></span>
<span class="line"><span>   - 火焰图分析</span></span></code></pre></div><h3 id="_6-3-注意事项" tabindex="-1">6.3 注意事项 <a class="header-anchor" href="#_6-3-注意事项" aria-label="Permalink to &quot;6.3 注意事项&quot;">​</a></h3><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 1. 谨慎使用 ognl 修改配置</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 修改可能影响线上业务</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 2. trace 和 watch 会对性能有一定影响</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 生产环境尽量减少使用</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 3. heapdump 会暂停 JVM</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 大内存服务慎用，建议使用 --live</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 4. 热更新有限制</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 推荐用于紧急修复小问题</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 5. 建议在测试环境先验证命令</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 避免对生产环境造成影响</span></span></code></pre></div><h2 id="七、总结" tabindex="-1">七、总结 <a class="header-anchor" href="#七、总结" aria-label="Permalink to &quot;七、总结&quot;">​</a></h2><p>Arthas 是 Java 开发者的必备工具，它让线上问题排查变得简单高效：</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>1. 上手简单：curl 即可安装，交互式命令行</span></span>
<span class="line"><span>2. 功能强大：覆盖诊断、监控、追踪、分析等场景</span></span>
<span class="line"><span>3. 无侵入：无需修改代码，所见即所得</span></span>
<span class="line"><span>4. 生产环境友好：支持认证、限流等安全措施</span></span>
<span class="line"><span></span></span>
<span class="line"><span>熟练掌握 Arthas，可以快速定位和解决：</span></span>
<span class="line"><span>- 接口响应慢</span></span>
<span class="line"><span>- CPU 飙升</span></span>
<span class="line"><span>- 内存泄漏</span></span>
<span class="line"><span>- 线程阻塞</span></span>
<span class="line"><span>- 代码逻辑问题</span></span></code></pre></div><p>建议将常用命令保存为脚本，遇到问题时快速执行，提高排查效率。</p>`,91)])])}const g=a(l,[["render",h]]);export{F as __pageData,g as default};
