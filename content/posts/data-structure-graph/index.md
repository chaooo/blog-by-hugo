---
title: 数据结构与算法 -- 图（Graph）
date: 2022-05-10 19:02:00
tags: [算法, 数据结构]
categories: [数据结构]
series: 数据结构与算法
---

**图（Graph）**。和树比起来，这是一种**更加复杂的非线性表结构**，由顶点和连接每对顶点的边所构成的抽象网络就是图。

图的定义：图是由顶点的有穷非空集合和顶点之间边的集合组成，通常表示为：`G(V,E)`，其中，`G`表示一个图，`V`是顶点的集合，`E`是边的集合。

图中的元素叫做`顶点（vertex）`。顶点与其他顶点建立的连接关系叫做`边（edge）`。跟顶点相连接的边的条数叫做顶点的`度（degree）`。

如果图中任意两个顶点之间的边都是无向边（边没有方向），则称该图为`无向图（Undirected graphs）`。
以此类推，把边有方向的图称为`有向图（Directed graphs）`。

- 完全图：
    + ①无向完全图：在无向图中，如果任意两个顶点之间都存在边，则称该图为无向完全图。
    + ②有向完全图：在有向图中，如果任意两个顶点之间都存在方向互为相反的两条弧，则称该图为有向完全图。
- 当一个图接近完全图时，则称它为`稠密图（Dense Graph）`，而当一个图含有较少的边时，则称它为`稀疏图（Spare Graph）`。
<!-- more -->

### 1. 图的存储方式
图的两个主要的存储方式：**邻接矩阵**和**邻接表**。
邻接矩阵存储方法的缺点是比较浪费空间，但是优点是查询效率高，而且方便矩阵运算。
邻接表存储方法中每个顶点都对应一个链表，存储与其相连接的其他顶点。尽管邻接表的存储方式比较节省存储空间，但链表不方便查找，所以查询效率没有邻接矩阵存储方式高。针对这个问题，邻接表还有改进升级版，即将链表换成更加高效的动态数据结构，比如平衡二叉查找树、跳表、散列表等。

#### 邻接矩阵（Adjacency Matrix）
邻接矩阵的底层依赖一个二维数组。
对于无向图来说，如果顶点 `i` 与顶点 `j` 之间有边，我们就将 `A[i][j]`和 `A[j][i]`标记为 `1`；
对于有向图来说，如果顶点 `i` 到顶点 `j` 之间，有一条箭头从顶点 `i` 指向顶点 `j` 的边，那我们就将 `A[i][j]`标记为 `1`；
对于带权图，数组中就存储相应的权重。

![](11_01.webp)
用邻接矩阵来表示一个图，虽然简单、直观，但是比较浪费存储空间。

#### 邻接表（Adjacency List）
图中画的是一个有向图的邻接表存储方式，每个顶点对应的链表里面，存储的是指向的顶点。
对于无向图来说，也是类似的，不过，每个顶点的链表中存储的，是跟这个顶点有边相连的顶点。

![](11_02.webp)
邻接矩阵存储起来比较浪费空间，但是使用起来比较节省时间。相反，邻接表存储起来比较节省空间，但是使用起来就比较耗时间。

可以将邻接表中的链表改成更加高效的动态数据结构，比如平衡二叉查找树、跳表、散列表、有序动态数组等。


### 2. 深度和广度优先搜索
算法是作用于具体数据结构之上的，深度优先搜索算法和广度优先搜索算法都是基于“图”这种数据结构的。
这是因为，图这种数据结构的表达能力很强，大部分涉及搜索的场景都可以抽象成“图”。

#### 2.1 广度优先搜索（BFS）
`广度优先搜索（Breadth-First-Search）`，我们平常都简称 `BFS`。直观地讲，它其实就是一种“地毯式”层层推进的搜索策略，即先查找离起始顶点最近的，然后是次近的，依次往外搜索。

![](11_03.webp)

尽管广度优先搜索的原理挺简单，但代码实现还是稍微有点复杂度。

代码里面，`bfs()` 函数就是基于之前定义的，图的广度优先搜索的代码实现。其中 `s` 表示起始顶点，`t` 表示终止顶点。我们搜索一条从 `s` 到 `t` 的路径。实际上，这样求得的路径就是从 `s` 到 `t` 的最短路径。
``` java
/**
 * 广度优先搜索
 * @param int s 起始顶点
 * @param int t 终止顶点
 */
public void bfs(int s, int t) {
  if (s == t) return;
  // visited 是用来记录已经被访问的顶点，用来避免顶点被重复访问。
  // 如果顶点 q 被访问，那相应的 visited[q]会被设置为 true
  boolean[] visited = new boolean[v];
  visited[s]=true;
  // queue 是一个队列，用来存储已经被访问、但相连的顶点还没有被访问的顶点。
  // 因为广度优先搜索是逐层访问的，也就是说，我们只有把第 k 层的顶点都访问完成之后，才能访问第 k+1 层的顶点。
  // 当我们访问到第 k 层的顶点的时候，我们需要把第 k 层的顶点记录下来，稍后才能通过第 k 层的顶点来找第 k+1 层的顶点。
  // 所以，我们用这个队列来实现记录的功能。
  Queue<Integer> queue = new LinkedList<>();
  queue.add(s);
  // prev 用来记录搜索路径。
  // 当我们从顶点 s 开始，广度优先搜索到顶点 t 后，prev 数组中存储的就是搜索的路径。
  // 不过，这个路径是反向存储的。prev[w]存储的是，顶点 w 是从哪个前驱顶点遍历过来的。
  // 比如，我们通过顶点 2 的邻接表访问到顶点 3，那 prev[3]就等于 2。
  // 为了正向打印出路径，我们需要递归地来打印。
  int[] prev = new int[v];
  for (int i = 0; i < v; ++i) {
    prev[i] = -1;
  }
  while (queue.size() != 0) {
    int w = queue.poll();
   for (int i = 0; i < adj[w].size(); ++i) {
      int q = adj[w].get(i);
      if (!visited[q]) {
        prev[q] = w;
        if (q == t) {
          print(prev, s, t);
          return;
        }
        visited[q] = true;
        queue.add(q);
      }
    }
  }
}
/**
 * 递归打印s->t的路径
 */
private void print(int[] prev, int s, int t) {
  if (prev[t] != -1 && t != s) {
    print(prev, s, prev[t]);
  }
  System.out.print(t + " ");
}
```
广度优先搜索的分解图：

![](11_04.webp)
![](11_05.webp)
![](11_06.webp)

最坏情况下，终止顶点 `t` 离起始顶点 `s` 很远，需要遍历完整个图才能找到。
这个时候，每个顶点都要进出一遍队列，每个边也都会被访问一次，所以，广度优先搜索的时间复杂度是 `O(V+E)`，其中，`V` 表示顶点的个数，`E` 表示边的个数。
当然，对于一个连通图来说，也就是说一个图中的所有顶点都是连通的，`E` 肯定要大于等于 `V-1`，所以，广度优先搜索的**时间复杂度**也可以简写为 `O(E)`。

广度优先搜索的空间消耗主要在几个辅助变量 `visited` 数组、`queue` 队列、`prev` 数组上。这三个存储空间的大小都不会超过顶点的个数，所以**空间复杂度**是 `O(V)`。


#### 2.2 深度优先搜索（DFS）
`深度优先搜索（Depth-First-Search）`，简称 `DFS`。它会尽可能深地搜索分支，最直观的例子就是“走迷宫”。
假设你站在迷宫的某个岔路口，然后想找到出口。你随意选择一个岔路口来走，走着走着发现走不通的时候，你就回退到上一个岔路口，重新选择一条路继续走，直到最终找到出口。这种走法就是一种深度优先搜索策略。

如下图。用深度递归算法搜索一条从 `s` 到 `t` 的路径，实线箭头表示遍历，虚线箭头表示回退。从图中我们可以看出，深度优先搜索找出来的路径，并不是顶点 `s` 到顶点 `t` 的最短路径。

![](11_07.webp)

深度优先搜索用的是一种比较著名的算法思想，回溯思想。这种思想解决问题的过程，非常适合用递归来实现。

深度优先搜索代码实现：
``` java

boolean found = false; // 全局变量或者类成员变量

public void dfs(int s, int t) {
  // found，的作用是，当我们已经找到终止顶点 t 之后，我们就不再递归地继续查找了。
  found = false;
  boolean[] visited = new boolean[v];
  int[] prev = new int[v];
  for (int i = 0; i < v; ++i) {
    prev[i] = -1;
  }
  recurDfs(s, t, visited, prev);
  print(prev, s, t);
}

private void recurDfs(int w, int t, boolean[] visited, int[] prev) {
  if (found == true) return;
  visited[w] = true;
  if (w == t) {
    found = true;
    return;
  }
  for (int i = 0; i < adj[w].size(); ++i) {
    int q = adj[w].get(i);
    if (!visited[q]) {
      prev[q] = w;
      recurDfs(q, t, visited, prev);
    }
  }
}
```

从上图可以看出，每条边最多会被访问两次，一次是遍历，一次是回退。所以，图上的深度优先搜索算法的**时间复杂度**是 `O(E)`，`E` 表示边的个数。
深度优先搜索算法的消耗内存主要是 `visited`、`prev` 数组和递归调用栈。`visited`、`prev` 数组的大小跟顶点的个数 `V` 成正比，递归调用栈的最大深度不会超过顶点的个数，所以总的**空间复杂度**就是 `O(V)`。


#### 2.3 深度和广度优先搜索总结
广度优先搜索和深度优先搜索是图上的两种最常用、最基本的搜索算法。广度优先搜索（BFS）和 深度优先搜索（DFS）搜索统称**暴力搜索算法**，适用于**图不大的搜索**。
广度优先搜索，通俗的理解就是，地毯式层层推进，从起始顶点开始，依次往外遍历。广度优先搜索需要借助队列来实现，遍历得到的路径就是，起始顶点到终止顶点的最短路径。
深度优先搜索用的是回溯思想，非常适合用递归实现。换种说法，深度优先搜索是借助栈来实现的。
在执行效率方面，深度优先和广度优先搜索的**时间复杂度都是 O(E)，空间复杂度是 O(V)**。

