---
title: 数据结构与算法 -- 单模式字符串匹配算法（BF、RK、KMP、BM）
date: 2022-06-25 21:15:00
tags: [算法, 数据结构]
categories: [数据结构]
series: 数据结构与算法
---


介绍字符串匹配算法之前，先定义几个概念：
- **主串**`Text`: 长度记作 `n`；
- **模式串**`Pattern`: 长度记作 `m`，并且 `m<=n`。
- 有效位移`s`（Valid Shift）：即模式串在主串中出现，并且位置移动 `s` 次。
![](01_01.png)

<!-- more -->

### 1. BF 算法
BF（Brute Force）算法，中文叫作暴力匹配算法，也叫朴素匹配算法。

从主串的首或尾开始逐个匹配字母（比较顺序没有限制）。
`BF 算法`的思想可以用一句话来概括：在主串中，检查从起始位置 `0` 开始到 `n-m` 位置且长度为 `m` 的 `n-m+1` 个子串，看有没有跟模式串匹配的。如下图：

![](01_02.png)

`BF 算法`从名字可以看出，这种算法的字符串匹配方式很“暴力”，当然也就会比较简单、好懂，但相应的性能也不高。
我们每次都比对 `m` 个字符，要比对 `n-m+1` 次，所以，这种算法的最坏情况时间复杂度是 `O(n*m)`。

尽管理论上，`BF 算法`的时间复杂度很高，是 `O(n*m)`，但在实际的开发中，它却是一个比较常用的字符串匹配算法。原因有两点。
- 第一，实际的软件开发中，大部分情况下，模式串和主串的长度都不会太长。而且每次模式串与主串中的子串匹配的时候，当中途遇到不能匹配的字符的时候，就可以就停止了，不需要把 `m` 个字符都比对一下。所以，尽管理论上的最坏情况时间复杂度是 `O(n*m)`，但是，统计意义上，大部分情况下，算法执行效率要比这个高很多。
- 第二，朴素字符串匹配算法思想简单，代码实现也非常简单。在工程中，在满足性能要求的前提下，简单是首选。这也是我们常说的[KISS（Keep it Simple and Stupid）设计原则](https://zh.wikipedia.org/wiki/KISS%E5%8E%9F%E5%88%99)。

#### 1.1 BF 算法总结
`BF 算法`（Brute Force）是最简单、粗暴的字符串匹配算法，它的实现思路是，拿模式串与主串中是所有子串匹配，看是否有能匹配的子串。
尽管理论上的最坏情况时间复杂度很高，是 `O(n*m)`（`n`、`m` 表示主串和模式串的长度）。
但在实际的开发中，它却是一个比较常用的字符串匹配算法。因为这种算法实现简单，对于处理小规模的字符串匹配很好用。

#### 1.2 Java代码实现
``` Java
/**
 * 字符串暴力匹配算法
 * @param text 主串
 * @param pattern 模式串
 */
public static int bf(String text, String pattern) {
    int n = text.length();
    int m = pattern.length();
    if (n < m) {return -1;}
    // i表示主串与模式串对齐的第一个字符
    int i = 0;
    while (i <= n - m) {
        int j;
        // 模式串从后往前匹配
        for (j = 0; j <= m-1; ++j) {
            if (text.charAt(i+j) != pattern.charAt(j)){
                break; // j为已匹配的字符串下一个字符的下标
            }
        }
        if (j == m) {
            // 匹配成功，返回主串与模式串第一个匹配的字符的位置
            return i;
        }
        i += 1;
    }
    return -1;
}
```



### 2. RK 算法
RK（Rabin-Karp）算法，是由它的两位发明者 Rabin 和 Karp 的名字来命名的。这个算法算是 `BF 算法`的升级版。

`BF 算法`中，如果主串长度为 `n`，模式串长度为 `m`，那在主串中，就会有 `n-m+1` 个长度为 `m` 的子串与模式串匹配。但是，每次检查主串与子串是否匹配，需要依次比对每个字符，所以 `BF 算法`的时间复杂度就比较高，是 `O(n*m)`。

`RK 算法`的思路：通过哈希算法对主串中的 `n-m+1` 个子串分别求哈希值，然后逐个与模式串的哈希值比较大小。如果某个子串的哈希值与模式串相等，那就说明对应的子串和模式串匹配了。因为哈希值是一个数字，数字之间比较是否相等是非常快速的，所以模式串和子串比较的效率就提高了。

整个`RK 算法`包含两部分：
第一部分，计算子串哈希值；通过设计特殊的哈希算法，只需要扫描一遍主串就能计算出所有子串的哈希值了，所以这部分的时间复杂度是 `O(n)`。
第二部分，模式串哈希值与每个子串哈希值之间的比较的时间复杂度是 `O(1)`，总共需要比较 `n-m+1` 个子串的哈希值，所以，这部分的时间复杂度也是 `O(n)`。
所以，`RK 算法`整体的时间复杂度就是 `O(n)`。
但是，当存在哈希冲突的时候，有可能存在子串和模式串的哈希值虽然是相同的，但是两者本身并不匹配。极端情况下，如果存在大量的冲突，每次都要再对比子串和模式串本身，那时间复杂度就会退化成 `O(n*m)`。但也不要太悲观，一般情况下，冲突不会很多，`RK 算法`的效率还是比 `BF 算法`高的。

#### 2.1 RK 算法总结
`RK 算法`（Rabin-Karp）是对每个子串分别求哈希值，然后拿子串的哈希值与模式串的哈希值比较，减少了比较的时间。
理想情况下，`RK 算法`的时间复杂度是 `O(n)`。不过这样的效率取决于哈希算法的设计方法，如果存在冲突的情况下，时间复杂度可能会退化。极端情况下，哈希算法大量冲突，时间复杂度就退化为 `O(n*m)`。

#### 2.2 Java代码实现
``` Java
/**
 * Rabin-Karp算法
 * @param text 主串
 * @param pattern 模式串
 */
public static int rk(String text, String pattern) {
    int n = text.length();
    int m = pattern.length();
    if (n < m) { return -1; }
    // 对模式串与第一个字串求哈希值
    Integer patternCode = pattern.hashCode();
    String sub = text.substring(0, m);
    int subCode = sub.hashCode();
    // 对主串中的n-m+1个子串分别求哈希值
    int i = 0;
    while (i < n - m + 1) {
        // 哈希值相同，才进一步确认
        if (patternCode.equals(subCode) && sub.equals(pattern)) {
            return i;
        }
        // 继续下一个子串
        i++;
        sub = text.substring(i, i + m);
        subCode = sub.hashCode();
    }
    return -1;
}
```


### 3. KMP 算法
KMP（Knuth Morris Pratt）算法，是最常用的之一。它以三个发明者命名，很多时候，提到字符串匹配，我们首先想到的就是`KMP 算法`。

`KMP 算法`的核心思想：
在模式串与主串匹配的过程中，当遇到不可匹配的字符的时候，我们希望找到一些规律，可以将模式串往后多滑动几位，跳过那些肯定不会匹配的情况。

先了解几个概念：
- **前缀**：指除了最后一个字符以外，一个字符串的全部头部组合；
- **后缀**：指除了第一个字符以外，一个字符串的全部尾部组合；
- **部分匹配值**："前缀"和"后缀"的最长的共有元素的长度。

以模式串"ABCDABD"为例：

| 子串 | 前缀 | 后缀 | 共有 | 长度 |
|:----|:-----|:-----|:-------------|:-------------|
| A | 空 | 空 | - | 0 |
| AB | [A] | [B] | - | 0 |
| ABC | [A, AB] | [BC, C] | - | 0 |
| ABCD | [A, AB, ABC] | [BCD, CD, D] | - | 0 |
| ABCDA | [A, AB, ABC, ABCD] | [BCDA, CDA, DA, A] | A | 1 |
| ABCDAB | [A, AB, ABC, ABCD, ABCDA] | [BCDAB, CDAB, DAB, AB, B] | AB | 2 |
| ABCDABD | [A, AB, ABC, ABCD, ABCDA, ABCDAB] | [BCDABD, CDABD, DABD, ABD, BD, D] | - | 0 |

所以模式串"ABCDABD"的《部分匹配表》是：

|   模式串   | A | B | C | D | A | B | D |
|:-----------|:--|:--|:--|:--|:--|:--|:--|
| 部分匹配表  | 0 | 0 | 0 | 0 | 1 | 2 | 0 |

"部分匹配"的实质是，有时候，字符串头部和尾部会有重复。比如，"ABCDAB"之中有两个"AB"，那么它的"部分匹配值"就是`2`（"AB"的长度）。搜索词移动的时候，第一个"AB"向后移动`4`位（字符串长度-部分匹配值），就可以来到第二个"AB"的位置。
所以`KMP 算法`的后移规律：
> 移动位数 = 已匹配的字符数 - 对应的部分匹配值

根据这个规律，我们以模式串"ABCDABD"来匹配字符串"BBC ABCDAB ABCDABCDABDE"。`KMP 算法`的匹配顺序是按照模式串下标从小到大。

![](01_07.png)

逐位比较，不匹配就移一位；直到主串有一个字符与模式串的第一个字符相同为止。

![](01_08.png)

已知空格与"D"不匹配时，前面`6`个字符"ABCDAB"是匹配的。查表可知，最后一个匹配字符"B"对应的"部分匹配值"为`2`，因此按照规律`移动位数 = 已匹配的字符数 - 对应的部分匹配值`算出向后移动的位数：`6 - 2` 等于`4`，所以将搜索词向后移动`4`位。

![](01_09.png)

因为空格与"C"不匹配，搜索词还要继续往后移。这时，已匹配的字符数为`2`（"AB"），对应的"部分匹配值"为`0`。所以，`移动位数 = 2 - 0`，于是将搜索词向后移`2`位。
按照规律`移动位数 = 已匹配的字符数 - 对应的部分匹配值`算出向后移动的位数：`2 - 0` 等于`2`，所以将搜索词向后移动`2`位。
继续逐位比较，因为空格与"A"不匹配，继续后移`1`位。

![](01_10.png)

逐位比较，直到发现"C"与"D"不匹配。于是，`移动位数 = 6 - 2`，继续将搜索词向后移动`4`位。
逐位比较，直到搜索词的最后一位，发现完全匹配，于是搜索完成。

#### 3.1 KMP 算法总结
`KMP 算法`（Knuth Morris Pratt）的核心是利用匹配失败后的信息，尽量减少模式串与主串的匹配次数以达到快速匹配的目的。具体实现就是通过一个`next()`函数实现，函数本身包含了模式串的局部匹配信息。`KMP 算法`的时间复杂度`O(m+n)`。

#### 3.2 KMP 算法的JAVA 代码实现
**部分匹配值**是模式串中子串"前缀"和"后缀"的**最长**的共有元素的长度。
《部分匹配表》在代码中定义为 **next 数组**，很多书中也叫**失效函数**（failure function）。
``` Java
/**
 * 实现next()函数
 * @param pattern 模式串
 */
private static int[] kmpNext(String pattern){
    int m = pattern.length();
    // 声明部分匹配表数组 next，用于存储部分匹配值
    int[] next = new int[m];
    // 第一个字符没有前后缀，最长匹配值为 0
    next[0] = 0;
    // 循环模式串，计算部分匹配表，i初始化为 1
    // j用于记录部分匹配值
    for(int i = 1,j = 0; i < m; i++){
        // ④ 在0~i中，j>0 并且 pattern.charAt(j) != pattern.charAt(i)时，
        //   表示上一轮比较，前后缀部分匹配值为j。
        //   上一轮比较时，下标[0~j-1]是前后缀最长相同字符串。
        //   下标[j-1]的部分匹配值表示为next[j-1]，即j=next[j-1];
        while(j > 0 && pattern.charAt(j) != pattern.charAt(i)){
            j = next[j - 1];
        }
        // ① 在0~i中，j=0 并且 pattern.charAt(j) != pattern.charAt(i)时，
        //   表示前后缀字符串集合中没有相同字符串，next[i]=j（同next[i]=0）
        // ② 在0~i中，j=0 并且 pattern.charAt(j) == pattern.charAt(i)时，
        //   表示前后缀字符串集合中有 1 个相同字符串，j++;next[i]=j;（同next[i]=1）
        // ③ 在0~i中，j>0 并且 pattern.charAt(j) == pattern.charAt(i)时，
        //   表示上一轮比较，前后缀部分匹配值为j。这轮为j+1。因此j++;next[i]=j;
        if(pattern.charAt(i) == pattern.charAt(j)){
            j++;
        }
        next[i] = j;
    }
    return next;
}
```

`KMP 算法`的框架代码，比较模式串和主串。
``` Java
public static int kmp(String text, String pattern){
    int n = text.length();
    int m = pattern.length();
    if (n < m) { return -1; }
    // 计算出部分匹配表
    int[] next = kmpNext(pattern);
    // i表示主串与模式串对齐的第一个字符
    int i = 0;
    while (i <= n - m) {
        int j;
        // 模式串从后往前匹配
        for (j = 0; j <= m-1; ++j) {
            if (text.charAt(i+j) != pattern.charAt(j)){
                break; // j为已匹配的字符串下一个字符的下标
            }
        }
        if (j == m) {
            return i; // 匹配成功，返回主串与模式串第一个匹配的字符的位置
        }
        int s = 1;
        if (j > 0) {
            // 后移位数 = 已匹配的字符数j - 对应的部分匹配值next[j-1]
            s = j - next[j-1];
        }
        i += s;
    }
    return -1;
}
```


### 4. BM 算法
BM（Boyer-Moore）算法，也是以两位发明者名字命名的字符串匹配算法。`BM 算法`不仅效率高，而且构思巧妙，容易理解。

`BM 算法`的核心思想：
我们把模式串和主串的匹配过程，看作模式串在主串中不停地往后滑动。当模式串和主串某个字符不匹配的时候，能够跳过一些肯定不会匹配的情况，将模式串往后多滑动几位。

BM 算法包含两部分，分别是**坏字符**规则（bad character rule）和**好后缀**规则（good suffix shift）。

#### 4.1 坏字符规则
`BM 算法`的匹配顺序比较特别，它是按照模式串下标从大到小的顺序，倒着匹配的。
当发现某个字符没法匹配的时候，我们把这个没有匹配的字符叫作"**坏字符**"（bad character）。

![](01_03.png)
如上图，从尾部开始比较，发现"S"与"E"不匹配，所以"S"就是"坏字符"。
并且，"S"不包含在模式串"EXAMPLE"之中，也就是说，可以把模式串直接移到"S"的后一位。

![](01_04.png)
如上图，依然从尾部开始比较，发现"P"与"E"不匹配，所以"P"是"坏字符"。
但是，"P"包含在模式串"EXAMPLE"之中。所以，将模式串后移两位，两个"P"对齐。

由此我们总结出**坏字符规则**：
> 后移位数 = 坏字符(对应模式串)的位置 - 模式串中的上一次出现位置
> 
> （如果"坏字符"不包含在模式串中，则上一次出现位置为 `-1`）

如上图，"P"作为"坏字符"为例，出现在模式串的第6位（从0开始编号），在模式串中的上一次出现位置为4，所以后移`6 - 4 = 2` 位。
再以前面"坏字符"的"S"为例，它出现在第6位，上一次出现位置是 -1（即未出现），则整个模式串后移 `6 - (-1) = 7` 位。


#### 4.2 好后缀规则
好后缀规则实际上跟坏字符规则的思路很类似。
从尾部开始比较，我们把所有尾部匹配的字符串称为"**好后缀**"（good suffix）。

![](01_05.png)
如上图，从尾部开始比较，"E"与"E"匹配；"LE"与"LE"匹配；"PLE"与"PLE"匹配；"MPLE"与"MPLE"匹配。
所以，"MPLE"、"PLE"、"LE"、"E"都是好后缀。
比较前一位，发现"I"与"A"不匹配。所以，"I"是"坏字符"。

**好后缀规则**：
> 后移位数 = 好后缀的位置 - 模式串中的上一次出现位置

举例来说，
如果模式串"ABCDAB"的后一个"AB"是"好后缀"。那么*好后缀的位置*是 `5`（取最后的"B"的值），*模式串中的上一次出现位置*是 `1`（第一个"B"的位置），所以后移`5 - 1 = 4`位。
如果模式串"ABCDEF"的"EF"是好后缀，则*好后缀的位置*是`5` ，*上一次出现的位置*是`-1`（即未出现），所以后移`5 - (-1) = 6`位。

- 好后缀规则三个注意点：
    1. "好后缀"的位置以最后一个字符为准。
        + 假定"ABCDEF"的"EF"是好后缀，则它的位置以"F"为准，即5。
    2. 如果"好后缀"在搜索词中只出现一次，则它的上一次出现位置为 -1。
        + 比如，"EF"在"ABCDEF"之中只出现一次，则它的上一次出现位置为-1（即未出现）。
    3. 如果"好后缀"有多个，则除了最长的那个"好后缀"，其他"好后缀"的上一次出现位置必须在头部。
        + 比如，假定"BABCDAB"的"好后缀"是"DAB"、"AB"、"B"，此时计算上一次出现位置是第0位，采用好后缀"B"计算。这个规则也可以这样表达：如果最长的那个"好后缀"只出现一次，则可以把搜索词改写成如下形式进行位置计算"(DA)BABCDAB"，即虚拟加入最前面的"DA"。


回到上图的例子。此时，所有的"好后缀"（MPLE、PLE、LE、E）之中，只有"E"在"EXAMPLE"还出现在头部，所以好后缀规则是后移`6 - 0 = 6`位。
而"I"是"坏字符"，坏字符规则后移`2 - (-1) = 3`位。
可以看到，"坏字符规则"只能移3位，"好后缀规则"可以移6位。所以，`BM 算法`的基本思想是，**每次后移这两个规则之中的较大值**。

更巧妙的是，这两个规则的移动位数，只与搜索词有关，与原字符串无关。因此，可以预先计算生成《坏字符规则表》和《好后缀规则表》。使用时，只要查表比较一下就可以了。

![](01_06.png)
继续从尾部开始比较，"P"与"E"不匹配，因此"P"是"坏字符"。根据"坏字符规则"，后移 `6 - 4 = 2`位；
从尾部开始逐位比较，发现全部匹配，于是搜索结束。

#### 4.3 BM 算法总结
`BM 算法`（Boyer-Moore）核心思想是，利用模式串本身的特点，在模式串中某个字符与主串不能匹配的时候，将模式串往后多滑动几位，以此来减少不必要的字符比较，提高匹配的效率。`BM 算法`构建的规则有两类，坏字符规则和好后缀规则。


#### 4.4 BM 算法的JAVA 代码实现
`BM 算法`的框架代码:
``` java
public static int bm(String text, String pattern){
    int n = text.length();
    int m = pattern.length();
    if (n < m) { return -1; }
    // 计算 坏字符规则表，记录模式串中每个字符最后出现的位置
    Map<Character, Integer> badCharRules = generateBadCharRules(pattern);
    // 计算 好后缀规则表，记录好后缀位置对应后移的位数
    int[] goodSuffixRules = generateGoodSuffix(pattern.toCharArray());
    // i表示主串与模式串对齐的第一个字符
    int i = 0;
    while (i <= n - m) {
        int j;
        // 模式串从后往前匹配
        for (j = m - 1; j >= 0; --j) {
            if (text.charAt(i+j) != pattern.charAt(j)){
                break; // 坏字符对应模式串中的下标是j
            }
        }
        if (j < 0) {
            // 匹配成功，返回主串与模式串第一个匹配的字符的位置
            return i;
        }
        // 后移位数 = 坏字符(对应模式串)的位置 - 坏字符在模式串中最后出现位置
        int s1 = j - getBadCharPosition(badCharRules, text.charAt(i + j));
        // 好后缀后移位数
        int s2 = goodSuffixRules[j];
        //后移这两个规则之中的较大值
        i += Math.max(s1, s2);
    }
    return -1;
}
```


##### 4.4.1 坏字符规则表
计算模式串中每个字符最后出现的位置。
``` java
/**
 * 坏字符规则表
 * 记录模式串中每个字符最后出现的位置
 */
private static Map<Character, Integer> generateBadCharRules(String pattern) {
    Map<Character, Integer> bmBc = new HashMap<>(pattern.length());
    // 选择最靠后的那个，因为这样不会让模式串滑动过多，导致本来可能匹配的情况被滑动略过
    for (int j = 0; j < pattern.length(); j++) {
        bmBc.put(pattern.charAt(j), j);
    }
    return bmBc;
}
/**
 * 获取坏字符在模式串中最后出现位置
 * 未出现返回 -1
 */
private static int getBadCharPosition(Map<Character, Integer> badChar, Character c){
    Integer a = badChar.get(c);
    return a == null ? -1 : a;
}
```


##### 4.4.2 好后缀规则表
好后缀规则表，用来记录好后缀位置对应后移的位数。
为了实现好后缀规则，需要定义一个`suffix`数组，用来记录模式串中匹配上好后缀的子串长度。
其中，`suffix[i] = s`满足`pattern[i-s,i] == pattern[m-1-s,m-1]`，`m`是模式串的长度。如下图：`pattern[i-4,i]`和`pattern[m-5,m-1]`字符相同。
![](01_11.png)

``` java
/**
 * 计算后缀长度数组
 * @param pattern 模式串字符
 */
private static int[] getSuffix(char[] pattern){
    // 初始化
    int m = pattern.length;
    int[] suffix = new int[m];
    // 计算
    suffix[m-1] = m;
    for (int i = m-2; i >= 0; --i) {
        int q = i;
        while (q >= 0 && pattern[q] == pattern[q+m-1-i]){
            q--;
        }
        suffix[i] = i-q;
    }
    // 返回后缀长度数组
    return suffix;
}
```

有了`suffix`数组，就可以定义好后缀忽略映射`bmgs`数组。
`suffix[i]`表示模式串中匹配上好后缀的子串长度（`i`表示子串的末位置）；
`bmgs[j]`表示好后缀位置对应后移的位数（`j`表示好后缀前一个字符的位置，即坏字符的位置）。
根据**好后缀规则**：`后移位数 = 好后缀的位置 - 模式串中的上一次出现位置`，构建`bmgs`数组分为三种情况：
- ①模式串没有子串匹配上好后缀，也没有最大前缀。
    + 后移位数为`m-1-(-1)`，即`bmgs[j]=m`。
- ②模式串没有子串匹配上好后缀，但有最大前缀。
    + 后移位数为`m-1-i`，即`bmgs[j] = m-1-i`。
![](01_13.png)
- ③模式串有子串匹配上好后缀。
    + 后移位数为`m-1-i`，即`bmgs[j] = m-1-i; j=m-1-suffix[i]`。
![](01_12.png)

``` java
/**
 * 好后缀忽略映射（后移位数数组）
 * @param pattern 模式串字符
 */
private static int[] generateGoodSuffix(char[] pattern){
    // 初始化
    int m = pattern.length;
    int[] bmgs = new int[m];
    // 获取后缀长度数组
    int[] suffix = getSuffix(pattern);
    // 赋值默认值
    for (int i = 0; j < m; ++j) {
        bmgs[j] = m;
    }
    // 模式串没有没有子串匹配上好后缀，但有最大前缀
    for (int i = m-1, j = 0; i >= 0; --i) {
        if (suffix[i] == i+1){
            for (; j < m-1-i; ++j) {
                if(bmgs[j] == m){
                    bmgs[j] = m-1-i;
                }
            }
        }
    }
    // 模式串有子串匹配上好后缀（多个取最左）
    for (int i = 0; i < m-1; ++i) {
        bmgs[m-1-suffix[i]] = m-1-i;
    }
    // 返回忽略数组
    return bmgs;
}
```

