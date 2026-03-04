# 4. 语法分析

## 语法分析器

![image.png](https://box.nju.edu.cn/seafhttp/f/fd65fe35dbe145cb81b9/?op=view)

这个例子中是最左推导，因为 alpha 中没有非终结符（也可以理解为将最左边的非终结符进行了推导）E+T 中 E 是 A，alpha 是空串，beta 是 +T

leftmost/rightmost

![image.png](https://box.nju.edu.cn/seafhttp/f/87763024627640a0a8df/?op=view)

- 消除二义性的惯用技术：分层
  - 改造文法，对于引发二义性的多种推导处于文法同一层的情况，将真正想要的推导提取出来，放到更深的层次
  - 最左推导中，更深层的非终结符总是会被优先替换
  - 确保只有一种最左推导，消除二义性

---

## 自顶向下的语法分析

递归向下法（有局限）

直接左递归和间接左递归

---

## 预测分析法

![image.png](https://box.nju.edu.cn/seafhttp/f/568b9fad3ae242b781c7/?op=view)

FIRST 和 FOLLOW 的计算方式（p49/pdf42 没那么简单）

### LL(1) 文法与预测分析表构造算法

要注意构造方式

当表格出现两个推导式时，发生冲突（二义性），课件 p65 有例子

![image.png](https://box.nju.edu.cn/seafhttp/f/ebc87f4d386e4a058149/?op=view)