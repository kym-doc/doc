# 计算机网络（国际化课程）

> 编写人：2022级 计算机科学与技术 张植翔
>
> 上课学期：2024 秋季
>
> 教师：张渊
>
> 课程网站：无

## 课程简介

一般来说匡院同学上的是大二下春季学期的**顾庆**老师班，两个班虽然用的是同一本书但是授课方式和考察内容有所出入。**张渊**老师的课程采用英语授课（基本上能听懂），学分为 4 学分，考核方式为期中+期末+课程代码 Project（C++，但不是很难）。

## 期末考试范围

!!! note

    这是笔者当年最后一节课上老师提到的考试范围，不确定每年是否一致（写的有点意识流，但是如果你期末再来看应该是能看懂的）

第四章（网络层，数据平面）：what is forwarding+routing, what is data/control plane, destination-based forwarding(最长前缀匹配) ，packet scheduling（what is fcfs, priority, round robin, weighted fair queueing，可能不考，但是要知道）; ip 数据报结构，ip地址，子网（cidr）,dhcp(how to get ip address，必须要知道)，nat（网络地址转换）

第五章（控制平面）：ls & dv 算法（怎么画表格，高概率出题），(what is good news travels slow, bad news travels fast, count-to-infinity problem)...（基本上笔记里面记录的都要复习）

good news-指开销变得更小，很快收敛

bad news-开销变大收敛慢-count-to-infinity problem

第六章（链路层）：basic idea, 差错检验（校验和, crc），两种链路的区别，mac 协议（内容，效率的计算，csma 有关的作业题），LAN（notion 中的部分）,mpls不做要求

第七章（无线网络）：无线网络的特点（不一定会出题）、cdma（工作原理），csma/ca（无线网wifi802.11）rts-cts is important.（802.11 的三个地址）802.11 addressing 的过程
