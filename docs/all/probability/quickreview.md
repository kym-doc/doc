# Probability Theory (quick review)

## Discrete Random Variable

### 伯努利试验

- 随机变量$X\in\{0,1\}$，概率质量函数（pmf）为
  $$
  p_X(k)=\bold{Pr}(X=k)=\begin{cases}
  p&\text{if }k=1\\\\
  1-p&\text{if }k=0
  \end{cases}
  $$

- 期望和方差
  $$
  \text{E}[X]=0\cdot(1-p)+1\cdot p=p\\\\
  \text{Var}[X]=\text{E}[X^2]-\text{E}[X]^2=p-p^2=p(1-p)
  $$



### 二项分布

- $X$：$n$次独立同分布的伯努利试验中成功的次数，每次成功的概率为$p$，$X\sim\text{Bin}(n,p)$
  $$
  p_X(k)=\bold{Pr}(X=k)=\binom{n}{k}p^k(1-p)^{n-k},\quad k=0,1,2,...,n
  $$

- 期望和方差
  $$
  X=X_1+X_2+\cdots X_n=\underset{i=1}{\overset{n}\sum}X_i
  $$
  其中$X_i$表示第$i$次伯努利试验的结果，那么
  $$
  \text{E}[X]=\text{E}[X_1]+\cdots+\text{E}[X_n]=np\\\\
  \text{Var}[X]=\underset{i=1}{\overset{n}\sum}\text{Var}[X_i]=np(1-p)
  $$



### 几何分布

- $X$：为了获取第一次成功所做的伯努利试验次数，$X\sim \text{Geo}(p)$
  $$
  p_X(k)=\bold{Pr}(X=k)=(1-p)^{k-1}p,\quad k=1,2,...
  $$

- 期望和方差
  $$
  X=\underset{k=1}{\overset{\infty}\sum}I_k
  $$
  其中$I_k\in\{0,1\}$表示是否前$k-1$次试验都失败了，如果是都失败了则取$1$，那么
  $$
  \text{E}[X]=\underset{k=1}{\overset{\infty}\sum}\text{E}[I_k]=\underset{k=1}{\overset{\infty}\sum}(1-p)^{k-1}=\frac{1}{p}\\\\
  $$
  方差要难算一点，计算平方均值需要借助几何分布的无记忆性，也就是第三个等号的推导
  $$
  \begin{aligned}
  \text{E}[X^2]&=\text{E}[X^2|X>1]\cdot(1-p)+\text{E}[X^2|X=1]\cdot p\\\\
  &=\text{E}[((X-1)+1)^2|X>1]\cdot(1-p)+p\\\\
  &=\text{E}[(X+1)^2]\cdot(1-p)+p\\\\
  &=(1-p)\text{E}[X^2]+2(1-p)\text{E}[X]+(1-p)+p\\\\
  &=(1-p)\text{E}[X^2]+2(1-p)/p+1\\\\
  \end{aligned}
  $$
  解得
  $$
  \text{E}[X^2]=(2-p)/p^2
  $$
  那么
  $$
  \text{Var}[X]=\text{E}[X^2]-\text{E}[X]^2=\frac{2-p}{p^2}-\frac{1}{p^2}=\frac{1-p}{p^2}
  $$



### 负二项分布

> 负二项分布有两种定义方式，一种是记录失败的次数，一种是记录总的试验次数，包括成功的次数

- $X$：在获取$r$次成功之前所做的失败的伯努利试验次数，$X\sim \text{Nebin}(r,p)$
  $$
  \begin{aligned}
  p_X(k)&=\bold{Pr}(X=k)=\binom{k+r-1}{k}(1-p)^kp^r \\\\
  &=(-1)^{k}\binom{-r}{k}(1-p)^kp^r,\quad k=0,1,2,...
  \end{aligned}
  $$

- 令$X=(X_1-1)+\cdots+(X_r-1)$，其中$X_1,\cdots,X_r$是独立同分布的几何分布变量，且参数为$p$，从而
  $$
  \text{E}[X]=\text{E}[X_1]+\cdots\text{E}[X_r]-r=\frac{r(1-p)}{p}
  $$
  同样的有
  $$
  \text{Var}[X]=\underset{i=1}{\overset{r}\sum}\text{Var}[X_i-1]=\underset{i=1}{\overset{r}\sum}\text{Var}[X_i]=\frac{r(1-p)}{p^2}
  $$
  

### 超几何分布

- $X$：在有限的$N$个物体中，恰好有$M$个标记为“成功”的物体，$n$次无放回采样中“成功”的次数，$X\sim\text{Hygeo}(N,M,n)$
  $$
  p_X(k)=\bold{Pr}(X=k)=\binom{M}{k}\binom{N-M}{n-k}\Big/\binom{N}{n},\quad k=0,1,...,n
  $$

- 每个“成功”物体被抽到的概率是
  $$
  \binom{N-1}{n-1}\Big/\binom{N}{n}=\frac{n}{N}
  $$
  令$X=X_1+\cdots+X_M$，其中$X_i$表示第$i$个红球有没有被抽到
  $$
  \text{E}[X]=\text{E}[X_1]+\cdots+\text{E}[X_M]=\frac{nM}{N}
  $$
  方差比较难算，这里不进行推导，把结论放下来
  $$
  \text{Var}[X]=\frac{nM(N-n)(N-M)}{N^2(N-1)}
  $$
  

### 泊松分布

- $X\in\{0,1,2,...\}$，$X\sim \text{Pois}(\lambda)$
  $$
  p_X(k)=\bold{Pr}(X=k)=e^{-\lambda}\frac{\lambda^k}{k!},\quad k=0,1,2,...
  $$

- 期望可以直接求
  $$
  \begin{aligned}
  \text{E}[X]&=\underset{k\ge 0}\sum k\frac{e^{-\lambda}\lambda^k}{k!}\\\\
  &=\underset{k\ge 1}\sum\frac{e^{-\lambda}\lambda^k}{(k-1)!}\\\\
  &=\underset{k\ge 0}\sum\frac{e^{-\lambda}\lambda^{k+1}}{k!}\\\\
  &=\lambda\underset{k\ge 0}\sum\frac{e^{-\lambda}\lambda^k}{k!}\\\\
  &=\lambda
  \end{aligned}
  $$
  方差类似
  $$
  \begin{aligned}
  \text{E}[X^2]&=\underset{k\ge 0}\sum k^2\frac{e^{-\lambda}\lambda^k}{k!}\\\\
  &=\underset{k\ge 1}\sum k\frac{e^{-\lambda}\lambda^k}{(k-1)!}\\\\
  &=\underset{k\ge 0}\sum(k+1)\frac{e^{-\lambda}\lambda^{k+1}}{k!}\\\\
  &=\lambda\underset{k\ge 0}\sum(k+1)\frac{e^{-\lambda}\lambda^{k}}{k!}\\\\
  &=\lambda\text{E}[X+1]\\\\
  &=\lambda(\text{E}[X]+1)\\\\
  &=\lambda(\lambda+1)\\\\
  \text{Var}[X]&=\text{E}[X^2]-\text{E}[X]^2=\lambda(\lambda+1)-\lambda^2=\lambda
  \end{aligned}
  $$



## Inequalities

### 马尔可夫不等式

$X$是非负随机变量，任意$a>0$，有
$$
\bold{Pr}(X\ge a)\le\frac{\text{E}[X]}{a}
$$


### 切比雪夫不等式

$X$是任意的随机变量，对任意的$a>0$
$$
\bold{Pr}(|X-\text{E}[X]|\ge a)\le\frac{\text{Var}[X]}{a^2}
$$

#### 推导：应用马尔可夫不等式

$$
\bold{Pr}(|X-\mu|\ge a)=\bold{Pr}((X-\mu)^2\ge a^2)\le\frac{\text{E}[(X-\mu)^2]}{a^2}
$$



### Chernoff Bound

令$X_1,\cdots,X_n\in\{0,1\}$是独立试验，$X=\underset{i=1}{\overset{n}\sum}X_i$，且$\mu=\text{E}[X]$，那么对任意$\delta>0$，有upper tail
$$
\bold{Pr}(X\ge(1+\delta)\mu)\le\left(\frac{e^{\delta}}{(1+\delta)^{(1+\delta)}}\right)^{\mu}\le\begin{cases}
e^{-\frac{\mu\delta^2}{3}},&0<\delta<1\\\\
2^{-(1+\delta)\mu},&(1+\delta)\ge 2e
\end{cases}
$$
对于任意$0<\delta<1$，有lower tail
$$
\bold{Pr}(X\le(1-\delta)\mu)\le\left(\frac{e^{-\delta}}{(1-\delta)^{(1-\delta)}}\right)^\mu\le e^{-\frac{\mu\delta^2}{2}}
$$

#### 推导：马尔可夫不等式

$$
\bold{Pr}(X\ge (1+\delta)\mu)=\bold{Pr}(e^{tX}\ge e^{t(1+\delta)\mu})\le e^{-t(1+\delta)\mu}\cdot\text{E}[e^{tX}],\forall t>0
$$



### Chernoff-Hoeffding Bound

$X_1,\cdots,X_n\in\{0,1\}$是独立的，且$S_n=\underset{i=1}{\overset{n}\sum}X_i$，那么对于任意的$t>0$
$$
\bold{Pr}(|S_n-\text{E}[S_n]|\ge t)\le 2\exp\left(-\frac{2t^2}{n}\right)
$$


## Basic Probabilistic models

### Balls into Bins

$m$个球扔进$n$个bins里uniformly at random，每次扔球的时候，每个桶有$1/n$的概率接到球。

- 设$m=2n\ln n$，证明存在一个盒子是空盒子的概率是$O(\frac{1}{n})$；

  随机变量怎么设很重要！

  设第$i$个桶收到了$X_i$个球，那么$X_i\sim \text{Bin}(m,\frac{1}{n})$，$\mu=\text{E}[X_i]=\frac{m}{n}=2\ln n$，从而有
  $$
  \bold{Pr}(X_1=0\cup \cdots\cup X_n=0)\le \underset{i=1}{\overset{n}\sum}\bold{Pr}(X_1=0)
  $$
  其中
  $$
  \bold{Pr}(X_i=0)\le\bold{Pr}(X\le(1-\delta)\mu)\le\left(\frac{e^{-\delta}}{(1-\delta)^{(1-\delta)}}\right)^{\mu}
  $$
  取$1-\delta=\frac{1}{e}$，那么$\delta=1-\frac{1}{e}=\frac{e-1}{e}$，所以有上式
  $$
  \le \left(\frac{e^{-\frac{e-1}{e}}}{\left(
  \frac{1}{e}\right)^{\frac{1}{e}}}\right)^{\mu}=e^{-\mu}=\frac{1}{n^2}
  $$
  
- 设$m=n$，证明出现球最多的盒子中的球数多于$\frac{3\ln n}{\ln\ln n}$的概率是极小的；

  此时，$\mu=1$，令
  $$
  L=\frac{e\ln n}{\ln\ln n}
  $$
  那么
  $$
  \bold{Pr}(X_i\ge L)=\bold{Pr}(X_i\ge L\mu)\le\left(\frac{e^{\delta}}{(1+\delta)^{(1+\delta)}}\right)^{\mu}=\frac{e^L}{eL^L}\le\frac{1}{n^2}
  $$
  

