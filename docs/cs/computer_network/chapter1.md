# 第一章-导论

## What is the Internet

- 设备（devices）

    准确的说，所有的设备都被称作主机（host）或者端系统（end system）

- 分组交换机（Packet switches）

    转发“分组”（packet, chunks of data），常见的有路由器（router）和交换机（switch）

- 通信链路（communication link）

    端系统通过通信链路和分组交换剂连接到一起

### What is Protocol

- 协议（Protocol）

    协议定义了在两个或多个通信实体之间交换的报文（message）的格式（format）和顺序（order），以及报文发送和/或接收一条报文或其他事件所采取的动作（actions）

### 网络边缘（Network Edge）

- 接入网（Access Network）

    将端系统物理连接到其边缘路由器（Edge Rounter）

    three ways：

    1. 家庭接入
    2. 企业接入
    3. 广域无线接入

    关注的焦点：

    1. 传输速率（transmission rate, bits per sec）
    2. 在多大程度上与其他用户共享网络
- 电缆接入（cable-based access）

    采用频率划分多路复用（频分复用，frequency division multiplexing），不同的信道在不同的频率上传输

    asymmetric：下行速度比上行速度快

- 数字用户线（Digital subscriber line, DSL）

    从提供本地电话接入的本地电话公司出获得因特网接入

    asymmetric

- 无线网络（wireless access networks）

    wireless local area networks（wifi）; wide-area cellular access networks（3g, 4g）

- 企业网络（enterprise networks）

### Network Core

---

- 分组交换（packet switching）

    端系统/主机将应用层的报文（message）分成数据包（称为分组，packet），在源（source）和目的地（destination）之间，每个分组都通过通信链路和分组交换机传送。

- 转发（forwarding）和路由（routing）

    转发的 local action：move arriving packets from router’s input link to appropriate roter output link

    路由的 global action：determine source-destination paths taken by packets; with certain routing algorithm

---

- 电路交换（circuit switching）

    两种方式为：频分复用（Frequency division multiplexing, FDM）和时分复用（Time division multiplexing, TDM）

    **circuit switching vs packet switching**，例子：

  - 假设有 1gb/s 的带宽，每个用户在 ‘active’ 时需要 100mb/s，约定 active 10% of time
  - 对于 circuit switching，因为路线是独享的，所以只有 $\frac{1gb/s}{100mb/s}=10$ 个用户
  - 但对于 packet switching，可以证明当用户人数 = 35 时，同时有超过 10 个人 ‘active’ 的概率小于 0.0004（证明如下）

    $$
    二项式定理
    $$

- 电路交换和分组交换的优缺点：

分组交换对于”爆发性“的数据有优势（大部分时间空闲），resource sharing; simpler，缺点在于可能会造成阻塞（congestion）

### Performance: loss, delay, throughput

**Packet delay:**

$d_{nodal}=d_{proc}+d_{queue}+d_{trans}+d_{prop}$

d_proc: nodal(节点) processing (check bit errors, determine output link, etc. typically < microsecs)，处理延迟，采用硬件处理，速度快

d_queue: queueing delay (time waiting at output link for transmission, depends on congestion level)，排队延迟

d_trans: transmission delay, 传输延迟

$d_{trans}=\frac{L}{R},\text{L is the packet length(bits), R is the link transmission rate(bps)}$

d_prop: propagation delay, 传播延迟

$d_{prop}=\frac{d}{s},\text{d is the length of physical link, s is the propagation speed }\sim2\times10^8m/sec$

```jsx
那么如何表征排队时延呢？或许可以从三个方面来考虑：**流量到达队列的速率、链路的传输速率和到达流量的性质**。即流量是周期性到达还是突发性到达，如果用 a 表示分组到达队列的平均速率（ a 的单位是分组/秒，即 pkt/s）前面说过 R 表示的是传输速率，所以能够从队列中推出比特的速率（以 bps 即 b/s 为单位）。假设所有的分组都是由 L 比特组成的，那么比特到达队列的平均速率是 La bps。那么比率 La/R 被称为流量强度(traffic intensity)
```

---

**Packet loss:**

**再讲丢包**

- 队列（又称缓冲区）缓冲区中的前一个链路的容量有限
- 到达满队列的数据包除了被丢掉没得选
- 丢失的数据包可以由前一个节点、源端系统重新传输，也可以根本不重新传输

---

**Throughput（吞吐率）:**

throughput: rate(bits/time unit) at which bits are being sent from sender to receiver;

- 描述的是整个【从发送方到接收方】的传输速率 (bits/time unit)
- 分为瞬时（instantaneous）和平均（average）
- **瓶颈链路（bottleneck link）**：限制端吞吐量的端路径上的链接，说人话就是路径上带宽最小的那段

---

### Protocol layers, service models

五层：

应用层（message，报文）

传输层（segment，报文段）

网络层（datagram，数据报）

链路层（frame，帧）

物理层

![pe9Pl8I.png](https://s41.ax1x.com/2026/03/03/pe9Pl8I.png)
