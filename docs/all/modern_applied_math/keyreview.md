# 要点回顾

> 编写人：2023级 计算机科学与技术(脑科学与人工智能) 陈力琰（要点回顾）
>
> 以下收录的是笔者个人在学习这门课程时，比较困惑的几个 key points，不保证是考试重点。

## Lebesgue可测函数列的收敛性

### Def

- 一致收敛：

    $f_1(x),f_2(x),...,f_k(x),...$是定义在$E$上的实值函数，任意$\epsilon>0$，存在$K\in\mathbb{N}$，对任意$k\geq K$，任意$x\in E$，有
    $$
    |f_k(x)-f(x)|<\epsilon
    $$
    则称$\{f_k(x)\}$在$E$上一致收敛到$f$，记作$f_k\Rightarrow f$或者$f\overset{u}\rightarrow f$.

- 几乎一致收敛：

    $\forall\delta>0,\exist E_{\delta}\subset E$，使得$m(E\backslash E_{\delta})<\delta$，在$E_{\delta}$上$f_k\Rightarrow f$，则称$\{f_k(x)\}$在$E_{\delta}$上几乎一致收敛到$f$，记作$f_k\overset{a.u.}\rightarrow f$.

- 几乎处处收敛（点点）：

    $f_1(x),f_2(x),...,f_k(x),...$是定义在$E$上的实值函数，若存在$E$中的点集$Z$，$m(Z)=0$，对任意$x\in E\backslash Z$，有
    $$
    \underset{k\rightarrow \infty}{\text{lim}}f_k(x)=f(x)
    $$
    则称$\{f_k(x)\}$在$E$上几乎处处收敛于$f(x)$，记作$f_k\rightarrow f,a.e.[E]$或$f_k\overset{a.e.}\rightarrow f$.

- 依测度收敛：

    $f_1(x),f_2(x),...,f_k(x),...$是定义在$E$上几乎处处有限的可测函数，任意$\epsilon > 0$，有
    $$
    \underset{k\rightarrow\infty}{\text{lim}}\hspace{0.1cm}m(E(|f_k-f|>\epsilon))=0
    $$
    则称$\{f_k(x)\}$在$E$上依测度收敛到$f(x)$，记作$f_k\overset{m}\rightarrow f$.

### 几种收敛性之间的关系

- 若$f_n\overset{a.u.}\rightarrow f$，则$f_n\rightarrow f,a.e.[E]$.（Cautious：这个证明是自己乱写的）

    !!! tip
        $f_n\overset{a.u.}{\rightarrow}f$，则任意$\epsilon=\frac{1}{k(k+1)}$，存在$E_k\sub E$，$\mu(E_k)<\frac{1}{k(k+1)}$，在$E\backslash E_k$上，$f_n$一致收敛到$f$。定义
        $$
        E_0=\underset{m=1}{\overset{\infty}\bigcap}\underset{k\geq m}{\bigcup}E_k
        $$
        注意到$\underset{k\geq m}{\bigcup}E_k$是一列随着$m$递增单调递减（至少单调不增）的集合列，所以当$m\rightarrow\infty$时，有
        $$
        \underset{k\geq m}{\bigcup}E_k\rightarrow\underset{m=1}{\overset{\infty}\bigcap}\underset{k\geq m}{\bigcup}E_k=E_0\\\\
        m(E_0)=m\left(\underset{m=1}{\overset{\infty}\bigcap}\underset{k\geq m}{\bigcup}E_k\right)=\underset{m\rightarrow\infty}{\text{lim}}m\left(\underset{k\geq m}{\bigcup}E_k\right)\leq \underset{m\rightarrow\infty}{\text{lim}}\underset{k=m}{\overset{\infty}\sum}m(E_k)\leq\underset{m\rightarrow\infty}{\text{lim}}\frac{1}{m}=0
        $$
        即$E_0$是一个零测集。在$E\backslash E_0$上，$f_n(x)\rightarrow f(x)$一致收敛，因此$f_n\rightarrow f$在$E\backslash E_0$上点点收敛。

- **叶戈罗夫定理**：$m(E)<\infty$，$f_1(x),f_2(x),...,f_k(x),...$和$f(x)$都是$E$上几乎处处有限的可测函数，若$f_k\rightarrow f, a.e.[E]$，则$\{f_k(x)\}$几乎一致收敛于$f(x)$.

    !!! tip
  
        注意限制条件$m(E)<\infty$，否则有这样的反例：
        
        定义在$[0,\infty)$上的函数列$f_n(x)=\chi_{[n,n+1]}$，任意$x\in[0,\infty)$都趋于0，$f_n$点点趋于0，但$f_n$并不几乎一致收敛到0（甚至不满足依测度收敛到0）.
        
        叶戈罗夫定理的证明略复杂，不在这里讨论了。

- $m(E)<\infty$，$f_1(x),f_2(x),...,f_k(x),...$是$E$上几乎处处有限的可测函数列，若$\{f_k(x)\}$在$E$上几乎处处收敛，则$\{f_k(x)\}$在$E$上依测度收敛到同一函数.

    !!! tip
        根据叶戈罗夫定理，$\{f_k(x)\}$在$E$上几乎一致收敛，记极限函数为$f(x)$。任意$\delta>0$，存在$E_{\delta}\sub E$，$m(E\backslash E_{\delta})<\delta$，在$E_{\delta}$上，$f_k\rightarrow f$。所以，任意$\epsilon>0$，存在$K\in\mathbb{N}$，当$k>K$时，有
        $$
        |f_k(x)-f(x)|<\epsilon,\quad\forall x\in E_{\delta}
        $$
        故$E(|f_k-f|\geq \epsilon)\sub E\backslash E_{\delta}$，$m(E(|f_k-f|\geq \epsilon))<\delta$，从而
        $$
        0\leq\underset{k\rightarrow \infty}{\overline{{\text{lim}}}}m(E(|f_k-f|\geq \epsilon)\leq\delta
        $$
        令$\delta\rightarrow 0$，即
        $$
        \underset{k\rightarrow\infty}{\text{lim}}m(E(|f_k-f|\geq \epsilon))=0
        $$

### Something else

- 若函数列$\{f_k(x)\}$在$E$上依测度收敛于$f(x)$与$g(x)$，则$f(x)$与$g(x)$几乎处处相等（依测度收敛的唯一性）.

    !!! tip
        因为
        $$
        |f(x)-g(x)|\leq|f(x)-f_k(x)|+|f_k(x)-g(x)|,\quad a.e.[E]
        $$
        所以任意$\epsilon>0$，有
        $$
        E(|f-g|>\epsilon)\sub E(|f-f_k|>\epsilon/2)\cup E(|f_k-g|>\epsilon/2),\quad a.e.[E]
        $$
        $k\rightarrow\infty$时，上式右端点集的测度趋于0，从而得
        $$
        \underset{k\rightarrow\infty}{\text{lim}}\hspace{0.1cm}m(E(|f-g|>\epsilon))=0
        $$
        又由$\epsilon$的任意性，$f(x)=g(x),a.e.[E]$

- **Riesz定理**：设$f(x)$，$\{f_k(x)\}$是可测集$E$上几乎处处有限的可测函数，若$\{f_k(x)\}$在$E$上依测度收敛于$f(x)$，则存在子列$\{f_{k_i}(x)\}$，使得
  $$
  \underset{i\rightarrow\infty}{\text{lim}}f_{k_i}(x)=f(x),\quad a.e.[E]
  $$

    !!! tip
        因为$\{f_k(x)\}$在$E$上

### 可测函数 & 连续函数

- **鲁金定理**：

    设$f(x)$是可测集$E$上的几乎处处有限的**可测**函数，则任意$\delta>0$，存在$E$中的一个闭集$F$，$m(E\backslash F)<\delta$，$f(x)$在$F$上连续.
    
    > 鲁金定理表明，在一定意义上，$\mathbb{R}^n$上的可测函数实际上很接近于连续函数。
  
    !!! note
        几乎处处有限$\neq$几乎处处有界：
        $$
        f(x) = 
        \begin{cases}
        \frac{1}{x}, & \text{if } x \in (0, 1] \\\\
        +\infty, & \text{if } x = 0
        \end{cases}
        $$
        $f(x)$几乎处处有限，但并不几乎处处有界。
  
- 推论1：

    若$f(x)$是可测集$E\subset \mathbb{R}^n$上几乎处处有限的可测函数，则存在$\mathbb{R}^n$上的连续函数列$\{g_k(x)\}$，$\{g_k(x)\}$在$E$上几乎处处收敛到$f(x)$.

- 引理：

    设$F\sub \mathbb{R}^n$是一个非空闭集，函数$f(x)$是$F$上的连续函数，则存在$\mathbb{R}^n$上的连续函数$g(x)$，使得$g|_F=f$，且$\underset{x\in\mathbb{R}^n}{\text{sup}}|g(x)|=\underset{x\in F}{\text{sup}}|f(x)|$.

- 推论2：

    设$f(x)$是可测集$E$上的几乎处处有限的函数，则$f(x)$可测的充分必要条件是，存在$E$上连续函数序列$\{g_k(x)\}$，$\{g_k(x)\}$几乎处处收敛到$f$.

## Lebesgue可测函数的积分

### Def

- 非负可测简单函数的积分：

    设$h(x)$是可测集$E\sub\mathbb{R}^n$上非负可测简单函数，即（注意，下式当中$E_j$是互不相交的集合，并起来是$E$）
    $$
    h(x)=\underset{j=1}{\overset{m}\sum}a_j\chi_{E_j}(x),\quad x\in E
    $$
    定义$h(x)$在可测集$E$上的积分为
    $$
    \int_Eh(x)\text{d}x=\underset{j=1}{\overset{m}\sum}a_jm(E_j)
    $$

- 非负可测函数的积分：

    设$f(x)$是可测集$E$上的非负可测函数，定义函数$f(x)$在$E$上的积分

    $$
    \int_E f(x)\text{d}x=\text{sup}\left\{ \int_E h(x)\text{d}x\mid h(x)\text{是非负可测简单函数，且}h(x)\leq f(x)\right\}
    $$

    这里的积分可以是$+\infty$，若积分$<\infty$，则称$f$在$E$上是Lebesgue可积的。

- 一般可测函数的积分：

    设$f(x)$是$E$上的可测函数，若$f^+(x)$和$f^-(x)$中至少有一个是可积的，则称
    $$
    \int_Ef(x)\text{d}x=\int_Ef^+(x)\text{d}x-\int_Ef^-(x)\text{d}x
    $$
    为$f(x)$在$E$上的积分。当上式右端两个积分值皆为有限时，称$f(x)$在$E$上是Lebesgue可积的。根据以上定义，显然还有
    $$
    \int_E|f(x)|\text{d}x=\int_Ef^+(x)\text{d}x+\int_Ef^-(x)\text{d}x
    $$

## Lebesgue积分的极限定理

> 重点讨论Lebesgue积分与极限运算的交换定理

- **Lebesgue基本定理**：

    设$\{f_n(x)\}$是可测集$E$上的非负可测函数列，$f(x)=\underset{n=1}{\overset{\infty}\sum}f_n(x)$，则

    $$
    \int_Ef(x)\text{d}x=\underset{n=1}{\overset{\infty}\sum}\int_Ef_n(x)\text{d}x
    $$

    !!! tip
        令
        $$
        S_k(x)=\underset{n=1}{\overset{k}\sum}f_n(x)
        $$
        则$\{S_k(x)\}$是非负可测函数列，$S_k(x)\leq S_{k+1}(x)$，且$\underset{k\rightarrow \infty}{\text{lim}}S_k(x)=f(x)$，故由Levi定理
        $$
        \int_Ef(x)\text{d}x=\underset{k\rightarrow\infty}{\text{lim}}\int_ES_k(x)\text{d}x=\underset{k\rightarrow\infty}{\text{lim}}\underset{n=1}{\overset{k}\sum}\int_Ef_n(x)\text{d}x=\underset{n=1}{\overset{\infty}\sum}\int_Ef_n(x)\text{d}x
        $$

- 推论：

    若$\{E_n\}$是可测集$E$的互不相交的可测子集，
    $$
    E=\underset{n=1}{\overset{\infty}\bigcup}E_n
    $$
    当函数$f(x)$在$E$上有积分时，$f(x)$在每一个子集$E_n$上都是有积分的。特别地，当$f\in L(E)$时，$f\in L(E_n)$，并且
    $$
    \int_Ef(x)\text{d}x=\underset{n=1}{\overset{\infty}\sum}\int_{E_n}f(x)\text{d}x
    $$

    !!! tip
        因为
        $$
        f^+(x)=\underset{n=1}{\overset{\infty}\sum}f^+(x)\chi_{E_n}(x)
        $$
        所以，根据Lebesgue基本定理
        $$
        \int_{E}f^+(x)\text{d}x=\underset{n=1}{\overset{\infty}\sum}\int_Ef^+(x)\chi_{E_n}(x)\text{d}x=\underset{n=1}{\overset{\infty}\sum}\int_{E_n}f^+(x)\text{d}x
        $$
        类似地，有
        $$
        \int_{E}f^-(x)\text{d}x=\underset{n=1}{\overset{\infty}\sum}\int_{E_n}f^-(x)\text{d}x
        $$
        当$f(x)$在$E$上有积分时，积分
        $$
        \int_{E}f^+(x)\text{d}x\text{与}\int_{E}f^-(x)\text{d}x
        $$
        中至少有一个有限，不妨设积分
        $$
        \int_{E}f^+(x)\text{d}x<\infty
        $$
        于是正项级数
        $$
        \underset{n=1}{\overset{\infty}\sum}\int_{E_n}f^+(x)\text{d}x=\int_{E}f^+(x)\text{d}x<\infty
        $$
        收敛。特别地，每一个加项
        $$
        \int_{E_n}f^+(x)\text{d}x<\infty
        $$
        所以$f(x)$在$E_n$上有积分，进而有
        $$
        \begin{aligned}
        \int_{E}f(x)\text{d}x&=\int_{E}f^+(x)\text{d}x-\int_{E}f^-(x)\text{d}x\\\\
        &=\underset{n=1}{\overset{\infty}\sum}\int_{E_n}f^+(x)\text{d}x-\underset{n=1}{\overset{\infty}\sum}\int_{E_n}f^-(x)\text{d}x\\\\
        &=\underset{n=1}{\overset{\infty}\sum}\left(\int_{E_n}f^+(x)\text{d}x-\int_{E_n}f^-(x)\text{d}x\right)\\\\
        &=\underset{n=1}{\overset{\infty}\sum}\int_{E_n}f(x)\text{d}x
        \end{aligned}
        $$
        当$f\in L(E)$时，积分
        $$
        \int_{E}f^+(x)\text{d}x\text{与}\int_{E}f^-(x)\text{d}x
        $$
        都有限，因此对于每个$n$，积分
        $$
        \int_{E_n}f^+(x)\text{d}x\text{与}\int_{E_n}f^-(x)\text{d}x
        $$
        都有限，故$f\in L(E_n)$.

- **Fatou引理**：

    若$\{f_n(x)\}$是可测集$E$上非负可测函数列，则
    $$
    \int_{E}\underset{n\rightarrow\infty}{\underline{\text{lim}}}f_n(x)\text{d}x\leq \underset{n\rightarrow\infty}{\underline{\text{lim}}}\int_{E}f_n(x)\text{d}x
    $$

    !!! tip
        考虑非负函数$g_n(x)=\text{inf}\{f_j(x)|j\geq n\}$，那么$g_n$是一个单调递增的函数列，即
        $$
        g_n(x)\leq g_{n+1}(x),k=1,2,...\\\\
        \Rightarrow \underset{n\rightarrow\infty}{\text{lim}}g_n(x)=\underset{n\rightarrow\infty}{\underline{\text{lim}}}f_n(x),x\in E.
        $$
        从而由Levi定理得
        $$
        \int_{E}\underset{n\rightarrow\infty}{\underline{\text{lim}}}f_n(x)\text{d}x=\int_{E}\underset{n\rightarrow\infty}{\text{lim}}g_n(x)\text{d}x=\underset{n\rightarrow\infty}{\text{lim}}\int_{E}g_n(x)\text{d}x\leq \underset{n\rightarrow\infty}{\underline{\text{lim}}}\int_{E}f_n(x)\text{d}x
        $$
        举个例子，说明不等号是有可能成立的：
        $$
        f_n(x)=\frac{1}{\sqrt{2\pi n}}e^{-\frac{x^2}{2n}},\quad n=1,2,3,...
        $$
        则
        $$
        \int_{\mathbb{R}}f_n(x)\text{d}x=1
        $$
        且$\underset{n\rightarrow\infty}{\text{lim}}f_n(x)\overset{\text{def}}{=}f(x)=0$，于是
        $$
        \int_{\mathbb{R}}\underset{n\rightarrow\infty}{\text{lim}}f_n(x)\text{d}x=0<1=\underset{n\rightarrow\infty}{\text{lim}}\int_{\mathbb{R}}f_n(x)\text{d}x
        $$

- **控制收敛定理**：

    给定可测集$E$，$\{f_n(x)\}$是可测函数列，且
    $$
    \underset{n\rightarrow\infty}{\text{lim}}f_n(x)=f(x),\quad a.e.[E]
    $$
    若存在函数$F(x)\in L(E)$，任意$n$，有
    $$
    |f_n(x)|\leq F(x), \quad a.e.[E]
    $$
    则$f_n(x)\in L(E),n=1,2,3,...$，$f(x)\in L(E)$，且
    $$
    \underset{n\rightarrow\infty}{\text{lim}}\int_Ef_n(x)\text{d}x=\int_Ef(x)\text{d}x
    $$
    函数$F(x)$称为函数列$\{f_n(x)\}$的控制函数。

    !!! tip
        因为
        $$
        |f_n(x)|\leq F(x), \quad a.e.[E]
        $$
        所以
        $$
        |f(x)|\leq F(x), \quad a.e.[E]
        $$
        因此$f\in L(E)$，考虑$E$上的可积函数列
        $$
        g_n(x)=|f_n(x)-f(x)|,\quad n=1,2,...
        $$
        则$0\leq g_n(x)\leq 2F(x), n=1,2,...$由Fatou引理得
        $$
        \int_E\underset{n\rightarrow\infty}{\text{lim}}[2F(x)-g_n(x)]\text{d}x\leq\underset{n\rightarrow\infty}{\underline{\text{lim}}}\int_E[2F(x)-g_n(x)]\text{d}x
        $$
        即
        $$
        2\int_EF(x)\text{d}x-\int_E\underset{n\rightarrow\infty}{\text{lim}}g_n(x)\text{d}x\leq2\int_EF(x)\text{d}x-\underset{n\rightarrow\infty}{\overline{\text{lim}}}\int_Eg_n(x)\text{d}x
        $$
        由于$\underset{n\rightarrow\infty}{\text{lim}}g_n(x)=0,a.e.[E]$，即得
        $$
        \underset{n\rightarrow\infty}{\overline{\text{lim}}}\int_Eg_n(x)\text{d}x=0
        $$
        最后，由不等式
        $$
        | \int_Ef(x)\text{d}x-\int_Ef_n(x)\text{d}x|\leq\int_Eg_n(x)\text{d}x
        $$
        令$n\rightarrow\infty$，得证。

- 推论1：

    设$E$是可测集，$\{f_n(x)\}$是可测函数列，且$\{f_n(x)\}$依测度收敛到$f(x)$，若存在$F(x)\in L(E)$，满足
    $$
    |f_n(x)|\leq F(x),\quad a.e.[E],n=1,2,3...
    $$
    则$f_n(x)\in L(E),n=1,2,3,...$，$f\in L(E)$，且
    $$
    \underset{n\rightarrow\infty}{\text{lim}}\int_Ef_n(x)\text{d}x=\int_Ef(x)\text{d}x
    $$

    !!! tip
        因为$\{f_n(x)\}$依测度收敛到$f(x)$，由Riesz定理知，存在子列$f_{n_k}(x)\rightarrow f(x),a.e.[E]$，故$f(x)\in L(E)$.
        
        记$g_n(x)=|f_n(x)-f(x)|$，只要证明
        $$
        \underset{n\rightarrow\infty}{{\text{lim}}}\int_Eg_n(x)\text{d}x=0
        $$
        如若不然，则有$\epsilon>0$与$n_1<n_2<...$，使得
        $$
        \int_Eg_{n_k}(x)\text{d}x\geq \epsilon,\quad k=1,2,3,...
        $$
        因为$\{f_{n}\}$依测度收敛到$f(x)$，函数列$\{f_{n}\}$有子列几乎处处收敛于$f(x)$，不妨设$f_{n_k}\rightarrow f,a.e.[E]$，即
        $$
        g_{n_k}\rightarrow 0,\quad a.e.[E]
        $$
        于是，根据控制收敛定理，有
        $$
        \underset{k\rightarrow\infty}{\text{lim}}\int_Eg_{n_k}(x)\text{d}x=0
        $$
        这与上述不等式矛盾，得证。

- 推论2：

    设$m(E)<\infty$，$\{f_n(x)\}\sub L(E)$，且$\{f_n(x)\}$一致有界，即存在常数$M>0$，使得
    $$
    |f_n(x)|\leq M,\quad n=1,2,3,...\forall x\in E
    $$
    则当$f_n(x)\rightarrow f(x),a.e.[E]$，或$\{f_n(x)\}$依测度收敛到$f(x)$时，均有
    $$
    \underset{n\rightarrow\infty}{\text{lim}}\int_Ef_n(x)\text{d}x=\int_Ef(x)\text{d}x
    $$


## $L^p$ space

### Definition

#### Common Cases

$E$是$\mathbb{R}^n$中的可测集，$f(x)$是$E$上的可测函数，$p\geq 1$，记
$$
\|f\|_p=\left(\int_E|f(x)|^p\text{d}x\right)^{\frac{1}{p}}
$$
称$\|f\|_p$为$f$的$L^p$范数；

令
$$
L^p(E)=\{f\in\bold{m}(E)|\|f\|_p<\infty\}
$$
称$L^p(E)$为$E$上的$L^p$空间。

#### Infinite Cases

设$f(x)$是$E$上的可测函数，如果存在$M>0$，使得$|f(x)|<M,a.e.[E]$，称$f(x)$为本性有界；对一切如此的$M$取下确界，记为$\|f\|_{\infty}$，称它为$f(x)$的本性上界；用$L^{\infty}(E)$表示在$E$上由本性有界函数的全体构成的集合。

### Inequalities

以下约定$1\leq p,q\leq\infty$，$p^{-1}+q^{-1}=1$，称$p$和$q$为共轭指数；若$1<p<\infty$，$q=p/(p-1)$。

1. **Young's Inequality**
    $$
    ab\leq\frac{a^p}{p}+\frac{b^q}{q},\quad a,b\geq 0
    $$

    !!! tip
        由于$\ln x$在$x>0$上是上凸函数（凹函数），所以$\frac{1}{p}\ln a^p+\frac{1}{q}\ln b^q\leq\ln(\frac{a^p}{p}+\frac{b^q}{q})$，从而有
        $$
        ab\leq\frac{a^p}{p}+\frac{b^q}{q}
        $$

2. **Hölder's Inequality**
    $$
    \|fg\|_1\leq\|f\|_p\|g\|_q,\quad f\in L^p(E),g\in L^q(E)
    $$

    !!! tip
        1. $\|f\|_p=0$或$\|g\|_q=0$，总有$f(x)g(x)=0,a.e.[E]$，不等式显然成立；
    
        2. $\|f\|_p>0,\|g\|_q>0$，令
        $$
        a=\frac{|f(x)|^p}{\|f\|_p^p},\quad b=\frac{|g(x)|^q}{\|g\|_q^q}
        $$
        带入Young's Inequality，有
        $$
        \frac{|f(x)g(x)|}{\|f\|_p\|g\|_q}\leq\frac{1}{p}\frac{|f(x)|^p}{\|f\|_p^p}+\frac{1}{q}\frac{|g(x)|^q}{\|g\|_q^q}
        $$
        将上式做积分，即可证得Hölder不等式。

3. **Minkowski's Inequality**
    $$
    \|f+g\|_p\leq\|f\|_p+\|g\|_p
    $$

    !!! tip
        1. $p=1$或$\infty$，证明是简单的，从略；
     
        2. $1<q<\infty$，则有
        $$
        \int_E|f(x)+g(x)|^p\text{d}x=\int_E|f(x)+g(x)|^{p-1}|f(x)+g(x)|\text{d}x\\\\
        \leq\int_E|f(x)+g(x)|^{p-1}|f(x)|\text{d}x+\int_E|f(x)+g(x)|^{p-1}|g(x)|\text{d}x
        $$
        现在将Hölder不等式分别用于上式右端两个积分，对第一个积分
        $$
        \int_E|f(x)+g(x)|^{p-1}|f(x)|\text{d}x\leq\|f\|_p\cdot \||f+g|^{p-1}\|_q=\|f\|_p\|f+g\|_p^{p-1}
        $$
        同理，对第二个积分
        $$
        \int_E|f(x)+g(x)|^{p-1}|g(x)|\text{d}x\leq\|g\|_p\cdot \||f+g|^{p-1}\|_q=\|g\|_p\|f+g\|_p^{p-1}
        $$
        将上面两不等式代入前式，即
        $$
        \|f+g\|_p^p\leq\|f+g\|_p^{p-1}(\|f\|_p+\|g\|_p)
        $$
        不妨设$\|f+g\|_p\neq 0$，上式两端除以$\|f+g\|_p^{p-1}$，即得三角不等式。

### Basics

- 若$m(E)<\infty$，则

    1. 当$p_1<p_2$时，$L^{p_2}(E)\subset L^{p_1}(E)$；
    2. $\underset{p\rightarrow\infty}{\text{lim}}\|f\|_p=\|f\|_{\infty}$.

    !!! tip
        1. 若$p_2=\infty$，显然有$L^{\infty}(E)\subset L^{p_1}(E)$：
        若$p_1<p_2<\infty$，令$r=p_2/p_1$，$r>1$，记$r^{\prime}$为$r$的共轭指数，则由Hölder's Inequality，得

            $$
            \begin{aligned}
            \int_{E}|f(x)|^{p_1}\text{d}x&=\int_{E}|f(x)|^{p_1}\cdot 1\text{d}x\\\\
            &\leq\left(\int_{E}|f(x)|^{p_1r}\text{d}x\right)^{\frac{1}{r}}\left(\int_{E}1^{r^{\prime}}\text{d}x\right)^{\frac{1}{r^{\prime}}}\\\\
            &=m(E)^{\frac{1}{r^{\prime}}}\left(\int_{E}|f(x)|^{p_2}\text{d}x\right)^{\frac{p_1}{p_2}}\\\\
            \Rightarrow \|f\|_{p_1}&\leq m(E)^{\frac{1}{p_1}-\frac{1}{p_2}}\|f\|_{p_2}
            \end{aligned}
            $$
            
            只要$f\in L^{p_2}(E)$，$\|f\|_{p_2}<\infty$，则$\|f\|_{p_1}<\infty$，从而$f\in L^{p_1}(E)$，证得$L^{p_2}(E)\subset L^{p_1}(E)$.
       
        2. 记$M=\|f\|_{\infty}$，则
            $$
            \|f\|_p\leq\left(\int_E M^p\text{d}x\right)^{\frac{1}{p}}\\\\
            \Rightarrow \underset{p\rightarrow \infty}{\overline{{\text{lim}}}}\|f\|_p\leq M
            $$

## 卷积

### Definition

- $f(x)$，$g(x)$是$\mathbb{R}$上的可测函数，若积分
    $$
    \int_{\mathbb{R}^n}f(x-y)g(y)\text{d}y
    $$
    存在，则称此积分为函数$f$与$g$的卷积，记为$f*g(x)$.

### 运算律

- 交换律

    $$
    f*g=g*f
    $$

    !!! tip
        **证明：**以$\mathbb{R}$为例，有

        $$
        f*g=\int_{-\infty}^{\infty}f(x-y)g(y)\text{d}y
        $$

        令$x-y=t$，$y=x-t$，$y$从$-\infty$积分到$+\infty$，相应的$t$从$\infty$积分到$-\infty$，所以

        $$
        \begin{aligned}
        f*g=&\int_{-\infty}^{\infty}f(x-y)g(y)\text{d}y\\\\
        =&\int_{\infty}^{-\infty}f(t)g(x-t)\text{d}(x-t)\\\\
        =&\int_{-\infty}^{\infty}f(t)g(x-t)\text{d}t\\\\
        =&g*f
        \end{aligned}
        $$
  
- 结合律

    $$
    f*(g*h)=(f*g)*h
    $$

    !!! tip
        证明是作业题，本题中默认$f,g,h\in L^1$，所以

        $$
        \begin{aligned}
        f*(g*h)=&\int_{-\infty}^{\infty}f(x-y)(g*h)(y)\text{d}y\\\\
        =&\int_{-\infty}^{\infty}f(x-y)\left(\int_{-\infty}^{\infty}g(y-z)h(z)\text{d}z\right)\text{d}y\\\\
        =&\int_{-\infty}^{\infty}\int_{-\infty}^{\infty}f(x-y)g(y-z)h(z)\text{d}z\text{d}y\\\\
        =&\int_{-\infty}^{\infty}\int_{-\infty}^{\infty}f(x-y)g(y-z)h(z)\text{d}y\text{d}z\\\\
        =&\int_{-\infty}^{\infty}\left(\int_{-\infty}^{\infty}f(x-y)g(y-z)\text{d}y\right)h(z)\text{d}z\\\\
        \end{aligned}
        $$

        令$y-z=t$，$y=z+t$，内层积分中$y$从$-\infty$积分到$\infty$，所以$t$从$-\infty$积分到$\infty$，那么

        $$
        \begin{aligned}
        f*(g*h)=&\int_{-\infty}^{\infty}\left(\int_{-\infty}^{\infty}f(x-y)g(y-z)\text{d}y\right)h(z)\text{d}z\\\\
        =&\int_{-\infty}^{\infty}\left(\int_{-\infty}^{\infty}f(x-z-t)g(t)\text{d}t\right)h(z)\text{d}z\\\\
        =&\int_{-\infty}^{\infty}(f*g)(x-z)h(z)\text{d}z\\\\
        =&(f*g)*h
        \end{aligned}
        $$

### Properties

- **Young's Inequality**

    若$f\in L^p(\mathbb{R}^n),1\le p\le \infty$，$g\in L^1(\mathbb{R}^n)$，则$f*g\in L^p(\mathbb{R}^n)$，且
    $$
    \|f*g\|_p\le \|f\|_p\|g\|_1
    $$

    > 如果从某种意义上说，$L^p$的性质比$L^1$要好一点（笔者个人不这么认为，笔者有限的知识看不出这个性质有什么好坏之分），那么卷积继承下来的是好的那一个。

    !!! tip
        **证明**
        
        > 注：以下所有的积分都是在整个$\mathbb{R}^n$上的，此处省略不写
        
        - $p=\infty$时
        
        $$
        \begin{aligned}
        |f*g(x)|=&\Big|\int f(x-y)g(y)\text{d}y\Big|\\\\
        \le &\int|f(x-y)g(y)|\text{d}y\\\\
        \le&\|f\|_{\infty}\int|g(y)|\text{d}y\\\\
        \le&\|f\|_{\infty}\|g\|_1
        \end{aligned}
        $$
        
        - $1\le p< \infty$
        
        $$
        \begin{aligned}
        |f*g(x)|\le&\int|f(x-y)||g(y)|\text{d}y\\\\
        =&\int|f(x-y)||g(y)|^{\frac{1}{p}}|g(y)|^{1-\frac{1}{p}}\text{d}y\\\\
        \end{aligned}
        $$
        
        根据Hölder不等式

        $$
        \begin{aligned}
        &\|fg\|_1\le\|f\|_p\|g\|_q\\\\
        \Rightarrow&\int|f(x)g(x)|\text{d}x\le\left(\int|f(x)|^p\text{d}x\right)^{\frac{1}{p}}\left(\int|g(x)|^q\text{d}x\right)^{\frac{1}{q}}
        \end{aligned}
        $$

        其中$p,q$是共轭数，也就是说$q=\frac{p}{p-1}$，那么上式可以放缩

        $$
        \begin{aligned}
        |f*g(x)|\le&\int|f(x-y)||g(y)|^{\frac{1}{p}}|g(y)|^{1-\frac{1}{p}}\text{d}y\\\\
        \le&\left(\int\left(|f(x-y)||g(y)|^{\frac{1}{p}}\right)^{p}\text{d}y\right)^{\frac{1}{p}}\left(\int|g(y)|^{(1-\frac{1}{p})\cdot\frac{p}{p-1}}\text{d}y\right)^{\frac{p-1}{p}}\\\\
        =&\left(\int|f(x-y)|^p|g(y)|\text{d}y\right)^{\frac{1}{p}}\left(\int|g(y)|\text{d}y\right)^{\frac{p-1}{p}}\\\\
        \end{aligned}
        $$

        对上式两端作$p$次乘方，再对$x$积分，那么

        $$
        \begin{aligned}
        \int|f*g(x)|^p\text{d}x\le&\int\left(\left(\int|f(x-y)|^p|g(y)|\text{d}y\right)^{\frac{1}{p}}\left(\int|g(y)|\text{d}y\right)^{\frac{p-1}{p}}\right)^p\text{d}x\\\\
        =&\int\left(\int|f(x-y)|^p|g(y)|\text{d}y\right)\left(\int|g(y)|\text{d}y\right)^{p-1}\text{d}x\\\\
        =&\left(\int|g(y)|\text{d}y\right)^{p-1}\int\left(\int|f(x-y)|^p|g(y)|\text{d}y\right)\text{d}x\\\\
        =&\|g\|_1^{p-1}\iint|f(x-y)|^p|g(y)|\text{d}y\text{d}x
        \end{aligned}
        $$

        根据Fubini定理

        $$
        \begin{aligned}
        \int|f*g(x)|^p\text{d}x\le&\|g\|_1^{p-1}\iint|f(x-y)|^p|g(y)|\text{d}y\text{d}x\\\\
        =&\|g\|_1^{p-1}\iint|f(x-y)|^p|g(y)|\text{d}x\text{d}y\\\\
        =&\|g\|_1^{p-1}\int|g(y)|\left(\int|f(x-y)|^p\text{d}x\right)\text{d}y\\\\
        =&\|g\|_1^{p-1}\int|g(y)|\|f\|_{p}^p\text{d}y\\\\
        =&\|g\|_1^{p-1}\|f\|_p^p\int|g(y)|\text{d}y\\\\
        =&\|g\|_1^{p}\|f\|_p^p
        \end{aligned}
        $$

        所以$f*g\in L^p(\mathbb{R}^n)$，且$\|f*g\|_p\le \|f\|_p\|g\|_1$。

- **引理：平均连续性**

    若$f\in L^p(\mathbb{R}^n),1\le p<\infty$，则有
    $$
    \underset{t\rightarrow 0}{\text{lim}}\int_{\mathbb{R}^n}|f(x+t)-f(x)|^p\text{d}x=0
    $$

    !!! note
        证明过程略，简要提一下就是，回顾之前的一个定理，首先考虑如下集合：
        $$
        C_c(\mathbb{R}^n)=\{f\in C(\mathbb{R}^n)|\exist\text{紧集}A\sub\mathbb{R}^n,f|_{\mathbb{R}^n\backslash A}=0\}
        $$
        称$f\in C_c(\mathbb{R}^n)$为有紧支集的连续函数。

        **定理：**设$E\sub \mathbb{R}^n$是可测集，则每个$f\in L^p(E)$，可用$C_c(\mathbb{R}^n)$中的函数在$E$上$L^p$逼近。

- **有界连续性**

    如果$f\in L^p,g\in L^q,1\le p\le \infty$，那么$f*g$是有界连续函数。
  
    !!! tip
        **证明**
        
        - 有界
        
            根据Hölder不等式，有

            $$
            \begin{aligned}
            |f*g(x)|\le&\int_{\mathbb{R}}|f(x-y)g(y)|\text{d}y\\\\
            \le& \left(\int_{\mathbb{R}}|f(x-y)|^p\text{d}y\right)^{\frac{1}{p}}\left(\int_{\mathbb{R}}|g(y)|^q\text{d}y\right)^{\frac{1}{q}}\\\\
            =&\|f\|_p\|g\|_q
            \end{aligned}
            $$
        
        - 连续性
        
            不妨先设$p<\infty$，如果$p=\infty$，那么$q=1$，此时可交换$f$和$g$的顺序，然后用相同的方式处理

            $$
            \begin{aligned}
            &|(f*g)(x+h)-(f*g)(x)|\\\\
            =&|\int_{\mathbb{R}}f(x+h-y)g(y)\text{d}y-\int_{\mathbb{R}}f(x-y)g(y)\text{d}y|\\\\
            \le&\int_{\mathbb{R}}|f(x+h-y)-f(x-y)|\cdot|g(y)|\text{d}y\\\\
            \le&\|g\|_{q}\left(\int_{\mathbb{R}}|f(x+h-y)-f(x-y)|^{p}\text{d}y\right)^{\frac{1}{p}}
            \end{aligned}
            $$

            根据平均连续性引理：若$f\in L^p(\mathbb{R}^n),1\le p<\infty$，则有$\underset{t\rightarrow 0}{\text{lim}}\int_{\mathbb{R}^n}|f(x+t)-f(x)|^p\text{d}x=0$，那么

            $$
            \begin{aligned}
            &\underset{h\rightarrow 0}{\text{lim}}\int_{\mathbb{R}^n}|f(x+h-y)-f(x-y)|^p\text{d}y=0\\\\
            \Rightarrow&\underset{h\rightarrow 0}{\text{lim}}\hspace{0.1cm}\|g\|_{q}\left(\int_{\mathbb{R}^n}|f(x+h-y)-f(x-y)|^p\text{d}y\right)^{\frac{1}{p}}=0\\\\
            \Rightarrow&\underset{h\rightarrow 0}{\text{lim}}\hspace{0.1cm}|(f*g)(x+h)-(f*g)(x)|=0
            \end{aligned}
            $$
            
            连续性得证，故$f*g$是有界连续函数。
  
  
- **光滑性&可积性**

    - $f\in C_c(\mathbb{R}),g\in L^p$，那么$f*g\in C(\mathbb{R})$，since $C_c(\mathbb{R})\sub L^p$；
  
        > 紧支集（如果实在不知道是什么就想象成闭区间吧）上的连续函数一致连续$\Rightarrow$一定有界$\Rightarrow$一定可积
  
        !!! tip
            **证明**
            
            我们首先回顾一个定义&一个定理
            
            - 定义：设$E$是$n$维可测集，又设$f_m\in L^p(E),m=1,2,...$，若存在$f\in L^p(E)$，使得
            
            $$
            \underset{m\rightarrow \infty}{\text{lim}}\|f_m-f\|_p=0
            $$

            则称函数列$\{f_m\}$依$L^p$的意义收敛于函数$f$，记作$f_m\overset{L^p}{\longrightarrow}f$。
            
            - 控制收敛定理：设$E$是$n$维可测集，$f,f_m$是$E$上的可测函数，$m=1,2,...$，而且$f_m\rightarrow f,\text{a.e.}[E]$或$\{f_m\}$依测度收敛到$f$，若
            
            $$
            \exist\hspace{0.2cm} g\in L^p(E),\hspace{0.5cm}1\le p<\infty
            $$

            使得

            $$
            |f_m(x)|\le g(x),\text{a.e.}[E],\hspace{0.3cm}m=1,2,...
            $$

            则$f_m\overset{L^p}{\longrightarrow}f$。
            
            设$f$的紧支集$\text{supp}(f)\sub[-N,N]$，目标是证明

            $$
            \underset{h\rightarrow 0}{\text{lim}}\int_{\mathbb{R}}\left(f(x_0+h-y)-f(x_0-y)\right)g(y)\text{d}y=0,\hspace{0.2cm}\forall x_0\in\mathbb{R}
            $$

            不妨先假设$|h|<1$，如果$|y|>N+|x_0|+1$，$|x_0+h-y|\ge|y|-|x_0|-h>N$，从而有

            $$
            \begin{aligned}
            &|\int_{\mathbb{R}}[f(x_0+h-y)-f(x_0-y)]g(y)\text{d}y|\\\\
            \le&\int_{\mathbb{R}}|f(x_0+h-y)-f(x_0-y)|\cdot|g(y)|\text{d}y\\\\
            \le&\int_{-N-|x_0|-1}^{N+|x_0|+1}|f(x_0+h-y)-f(x_0-y)|\cdot|g(y)|\text{d}y\\\\
            \end{aligned}
            $$

            令$A=N+|x_0|+1$，上式可进一步写作

            $$
            \begin{aligned}
            &\int|f(x_0+h-y)-f(x_0-y)|\cdot|g(y)|\cdot\chi_{[-A,A]}\text{d}y\\\\
            \le&\int(|f(x_0+h-y)|+|f(x_0-y)|)\cdot|g(y)|\cdot\chi_{[-A,A]}\text{d}y\\\\
            \le&\int2\|f\|_{\infty}\cdot|g(y)|\cdot\chi_{[-A,A]}\text{d}y\\\\
            \end{aligned}
            $$

            由于$2\|f\|_{\infty}\cdot|g(y)|\cdot\chi_{[-A,A]}\in L^p\sub L^1$（有限集上），根据L.C.D.T，有

            $$
            \underset{h\rightarrow 0}{\text{lim}}\int_{\mathbb{R}}\left(f(x_0+h-y)-f(x_0-y)\right)g(y)\text{d}y=0,\hspace{0.2cm}\forall x_0\in\mathbb{R}
            $$
            
            > 这里的$f_m(y)=(f(x_0+h(m)-y)-f(x_0-y))g(y)$，$f=0$，另一种视角是将$f_m$视为$f(x_0+h(m)-y)g(y)$，$f$看作$f(x_0-y)g(y)$，放缩时只需要放到$1$倍的$\|f\|_{\infty}$就可以了，同样可证得。
  
    - $f\in C_c^1,g\in L^p\Rightarrow f*g\in C^1\cap L^p$；
  
        > 注意这里$C_c^1$的含义是紧支集上的一阶连续可导函数，$C^1$是一阶连续可导函数
    
        !!! tip
            证明思路同上，也是用控制收敛定理，具体的放缩控制部分如下：

            $$
            \begin{aligned}
            &\underset{h\rightarrow 0}{\text{lim}}\frac{f*g(x_0+h)-f*g(x_0)}{h}\\\\
            =&\underset{h\rightarrow 0}{\text{lim}}\int_{\mathbb{R}}\left[\frac{f(x_0+h-y)-f(x_0-y)}{h}\right]g(y)\text{d}y\\\\
            \end{aligned}
            $$

            其中

            $$
            \left[\frac{f(x_0+h-y)-f(x_0-y)}{h}\right]g(y)\le\|f^{\prime}\|_{\infty}|g(y)|\chi_{[-A,A]}
            $$
  
    - $f\in C_c^{\infty},g\in L^p\Rightarrow f*g\in C^{\infty}\cap L^p$
  
        > $C_c^{\infty}$表示紧支集上的无穷阶导数依然连续的函数，$C^{\infty}$是无穷阶导数依然连续的函数
  
- **恒等逼近**

    - **定义：**设$\varphi(x)$是定义在$\mathbb{R}^n$上的函数，对于任意的常数$\varepsilon>0$，记

        $$
        \varphi_{\varepsilon}(x)=\varepsilon^{-n}\varphi\left(\frac{x}{\varepsilon}\right)
        $$

    - **定理：**设非负函数$\varphi(x)\in L^1(\mathbb{R}^n)$，且$\|\varphi\|_1=1$。若
    
        $$
        f\in L^p(\mathbb{R}^n),\quad 1\le p<\infty
        $$

        则有

        $$
        \underset{\varepsilon\rightarrow0}{\text{lim}}\|\varphi_{\varepsilon}*f-f\|_p=0
        $$

    !!! tip
    
        **证明：**
        
        以$\mathbb{R}$上的函数为例，根据卷积的定义

        $$
        \begin{aligned}
        \varphi_{\varepsilon}*f(x)=&\int_{\mathbb{R}}f(x-y)\varphi_{\varepsilon}(y)\text{d}y\\\\
        =&\int_{\mathbb{R}}f(x-y)\cdot\varepsilon^{-1}\cdot\varphi\left(\frac{y}{\varepsilon}\right)\text{d}y\\\\
        =&\int_{\mathbb{R}}f(x-y)\cdot\varphi\left(\frac{y}{\varepsilon}\right)\text{d}\frac{y}{\varepsilon}\\\\
        =&\int_{\mathbb{R}}f(x-\varepsilon y)\cdot\varphi\left(y\right)\text{d}y\\\\
        \end{aligned}
        $$

        $\varphi(x)\in L^1(\mathbb{R}^n)$是非负函数，且$\|\varphi\|_1=1$，所以

        $$
        \int_{\mathbb{R}}\varphi(y)\text{d}y=1\Rightarrow\int_{\mathbb{R}}f(x)\varphi(y)\text{d}y=f(x)
        $$

        进一步可得

        $$
        \begin{aligned}
        |\varphi_{\varepsilon}*f(x)-f(x)|&=\Big|\int_{\mathbb{R}}[f(x-\varepsilon y)-f(x)]\cdot\varphi\left(y\right)\text{d}y\Big|\\\\
        &\le\int_{\mathbb{R}}|f(x-\varepsilon y)-f(x)||\varphi(y)|^{\frac{1}{p}}|\varphi(y)|^{\frac{1}{q}}\text{d}y\\\\
        &\le\left[\int_{\mathbb{R}}|f(x-\varepsilon y)-f(x)|^p|\varphi(y)|\text{d}y\right]^{\frac{1}{p}}\cdot\left[\int_{\mathbb{R}}|\varphi(y)|\text{d}y\right]^{\frac{1}{q}}\\\\
        &=\left[\int_{\mathbb{R}}|f(x-\varepsilon y)-f(x)|^p|\varphi(y)|\text{d}y\right]^{\frac{1}{p}}
        \end{aligned}
        $$

        对上式两端作$p$次乘方再对$x$作积分，运用Fubini定理得

        $$
        \begin{aligned}
        \int_{\mathbb{R}}|\varphi_{\varepsilon}*f(x)-f(x)|^p\text{d}x&=\iint_{\mathbb{R}}|f(x-\varepsilon y)-f(x)|^p|\varphi(y)|\text{d}y\text{d}x\\\\
        &=\iint_{\mathbb{R}}|f(x-\varepsilon y)-f(x)|^p|\varphi(y)|\text{d}x\text{d}y\\\\
        &\le\int_{\mathbb{R}}|\varphi(y)|\left\{\int_{\mathbb{R}}|f(x-\varepsilon y)-f(x)|^p\text{d}x\right\}\text{d}y
        \end{aligned}
        $$

        令$\varepsilon\rightarrow0$，因为

        $$
        \int_{\mathbb{R}}|f(x-\varepsilon y)-f(x)|^p\text{d}x\le2^p\|f\|_p^p
        $$

        由控制收敛定理得

        $$
        \underset{\varepsilon\rightarrow 0}{\text{lim}}\int_{\mathbb{R}}|\varphi_{\varepsilon}*f(x)-f(x)|^p\text{d}x\le\int_{\mathbb{R}}|\varphi(y)|\left\{\underset{\varepsilon\rightarrow 0}{\text{lim}}\int_{\mathbb{R}}|f(x-\varepsilon y)-f(x)|^p\text{d}x\right\}\text{d}y=0
        $$

    - **e.g.**

        !!! note
        
            1. 函数$\varphi(x)=\chi_{[-\frac{1}{2},\frac{1}{2}]}$，则
                $$
                \varphi_{\varepsilon}(x)=\frac{1}{\varepsilon}\chi_{[-\frac{\varepsilon}{2},\frac{\varepsilon}{2}]}(x)
                $$
                任意$f\in L^p(\mathbb{R})$，有
                $$
                \varphi_{\varepsilon}*f(x)=\frac{1}{\varepsilon}\int_{x-\frac{\varepsilon}{2}}^{x+\frac{\varepsilon}{2}}f(y)\text{d}y:=f_{\varepsilon}(x)
                $$
                所以由Young's不等式，$\|f_{\varepsilon}\|_p\le\|f\|_p$，且由恒等逼近，$f_{\varepsilon}\overset{L^p}{\longrightarrow}f$.
          
            2. 在$(0,1)$上定义函数
                $$
                y=\varphi(x)=\left[1+\exp\left(\frac{1}{1-x}-\frac{1}{x}\right)\right]^{-1}
                $$
                然后令
                $$
                \begin{cases}
                \varphi(0)=1,\\\\
                \varphi(x)=0,&x\ge 1\\\\
                \varphi(x)=\varphi(-x),&x<0
                \end{cases}
                $$
                可证明$\varphi\in C_c^{\infty}(\mathbb{R})$，记
                $$
                \varphi_n(x)=n\varphi(nx)/\|\varphi\|_1,\quad n=1,2,...
                $$
                任给
                $$
                f\in L^p(\mathbb{R}),\quad 1\le p<\infty
                $$
                令
                $$
                f_n=\varphi_n *f\Rightarrow f_n\in C^{\infty}(\mathbb{R}),f_n\overset{L^p}{\longrightarrow}f
                $$
                结论：每个函数$f\in L^p(\mathbb{R})$可用无限次可微函数$L^p$逼近，换句话说，$C^{\infty}(\mathbb{R})$是$L^p(\mathbb{R})$的稠密子空间；
          
            3. 考虑函数
                $$
                W(x)=\frac{1}{\sqrt{2\pi}}e^{-\frac{1}{2}x^2}
                $$
                类似地，可得到结论：每个$f\in L^p[a,b]$可用多项式$L^p$逼近，因此区间$[a,b]$上的全体多项式是空间$L^p[a,b]$的稠密线性子空间。

## 傅立叶变换

### Definition

- 对于任意的$f\in L(\mathbb{R})$，令
    $$
    \widehat{f}(t)=\frac{1}{\sqrt{2\pi}}\int_{\mathbb{R}}f(x)e^{-itx}\text{d}x
    $$

    > 根据助教习题课上的讲解，还有一种等价的写法如下所示，虽然笔者尚不清楚两者为什么是等价的。

    !!! note
        还有一种写法：
        $$
        \widehat{f}(t)=\int_{\mathbb{R}}f(x)e^{-2\pi\cdot itx}\text{d}x
        $$

- 速降函数空间$S$
    $$
    f\in S\Leftrightarrow\forall \alpha,\beta\in \mathbb{N},\quad\underset{x\in\mathbb{R}}{\text{sup}}\hspace{0.1cm}|x|^{\alpha}|f^{(\beta)}(x)|<\infty
    $$

- 逆变换：若$g\in S(\mathbb{R})$，则
    $$
    g(x)=\frac{1}{\sqrt{2\pi}}\int_{\mathbb{R}}\widehat{g}(t)e^{ixt}\text{d}t
    $$

!!! tip
    建议不要管这么多，直接记两个公式：
    $$
    \begin{aligned}
    \hat{f}(\xi)=&\frac{1}{\sqrt{2\pi}}\int_{\mathbb{R}}e^{-ix\xi}f(x)\text{d}x\\\\
    \check{f}(\xi)=&\frac{1}{\sqrt{2\pi}}\int_{\mathbb{R}}e^{ix\xi}f(x)\text{d}x\\\\
    \end{aligned}
    $$

### Properties

- 设$\tau_hf(x)=f(x-h)$，则
    $$
    \widehat{\tau_hf(x)}=e^{-ih\xi}\widehat{f}(\xi)
    $$

- 与上一个性质类似的，有
    $$
    \widehat{e^{ihx}f}(\xi)=\tau_h\widehat{f}(\xi)
    $$

- 设$f_{\lambda}(x)=\frac{1}{\lambda}f(\frac{x}{\lambda})$，则
    $$
    \widehat{f_{\lambda}}(\xi)=\widehat{f}(\lambda\xi)
    $$

- 卷积
    $$
    \widehat{f*g}(\xi)=\sqrt{2\pi}\cdot\widehat{f}(\xi)\cdot\widehat{g}(\xi)
    $$

- 若$f\in L^1\cap C^1$且$f^{\prime}\in L^1$，那么$\widehat{f^{\prime}}(\xi)=i\xi\widehat{f}(\xi)$

    !!! tip
        $$
        \begin{aligned}
        \widehat{f^{\prime}}(\xi)&=\frac{1}{\sqrt{2\pi}}\int_{\mathbb{R}}e^{-ix\xi}f^{\prime}(x)\text{d}x\\\\
        &=\frac{1}{\sqrt{2\pi}}f(x)e^{-ix\xi}\Big|_{-\infty}^{\infty}-\frac{1}{\sqrt{2\pi}}(-i\xi)\int_{\mathbb{R}}f(x)e^{-ix\xi }\text{d}x\\\\
        &=i\xi\widehat{f}(\xi)
        \end{aligned}
        $$

        该结论还可以进一步推广，即

        $$
        \widehat{f^{(k)}}(\xi)=(i\xi)^k\widehat{f}(\xi)
        $$

## Plancherel & Paserval

### Plancherel定理

存在$L^2(\mathbb{R})$到自身的一个一一在上线性映射$\Psi$，它满足
$$
\Psi f=\widehat{f},\quad f\in S(\mathbb{R})
$$
且
$$
\|\Psi f\|_2=\|f\|_2,\quad f\in L^2(\mathbb{R})
$$

### Parseval等式

$$
\int_{\mathbb{R}}f(x)\overline{g}(x)\text{d}x=\int_{\mathbb{R}}\widehat{f}(t)\overline{\widehat{g}(t)}\text{d}t
$$

或者另一种写法：
$$
\int_{\mathbb{R}}f(x)\overline{\widehat{g}}(x)\text{d}x=\int_{\mathbb{R}}\widehat{f}(t)\overline{g(t)}\text{d}t
$$

## 度量空间

### Definition

- **度量空间(Metric Space)**

    设$X$是一个非空集，若存在$X$上一个双变量实值函数$\rho(x,y):X\times X\rightarrow\mathbb{R}_{\ge 0}$，满足下列3个条件：

    - 正定性
        $$
        \rho(x,y)\ge 0,\text{ 而且 }\rho(x,y)=0\text{ 当且仅当 }x=y
        $$

    - 对称性
        $$
        \rho(x,y)=\rho(y,x)
        $$

    - 三角不等式
        $$
        \rho(x,z)\le\rho(x,y)+\rho(y,z)
        $$

    $\forall x,y,z\in X$，则称$\rho$为$X$上一个度量（距离），$X$称为度量空间（距离空间）。一个以$\rho$为度量的度量空间$X$记作$(X,\rho)$。

- 开集

    - 邻域
    - 内点

- 闭集

    - 极限

### Properties

- 完备性
- 稠密性
- 可分性
- 列紧性
- 紧集
- 连续映射

## 赋范线性空间

### Definition

- **范数&赋范线性空间**

    设$X$是复（或实）线性空间，对于$X$中每个元素$x$，按照一定法则使其与一非负实数$\|x\|$相对应，满足

    - 正定性：$\|x\|>0$，且$\|x\|=0\Leftrightarrow x=0$；

    - 三角不等式：$\|x+y\|\le\|x\|+\|y\|,\quad \forall x,y\in X$；

    - 齐次性：$\|\alpha x\|=|\alpha|\|x\|,\quad \alpha\in \mathbb{K},x\in X$；

    其中$\mathbb{K}$是复（或实）线性赋范空间，$\|x\|$为元素$x$的范数或模。

- **Banach空间**

    完备的线性赋范空间称为Banach空间。
