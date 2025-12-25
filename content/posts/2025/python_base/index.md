---
title: 「学习笔记」Python基础入门
date: 2025-05-26 16:42:47
tags: [Python编程, 学习笔记]
categories: [Python编程]
series: Python编程
toc: true
---

此篇学习笔记基于`Python 3.14.0`版本，Python安装包里有`Python解释器`、Python运行所需要的`基础库`，以及交互式运行工具——`PythonShell`。
编写和运行Python程序主要的两种方式：
1. 交互方式：Python + 回车键
2. 文件方式：Python 文件名.py + 回车键

## 1. 语法基础
### 1.1 标识符的命名规则：
1. 区分大小写；
2. 只能是由`下画线（_）`、`字母`、`数字`或Unicode字符(包括汉字，但不建议)组成；
3. 首字符不能是数字；
4. 关键字不能作为标识符；
5. 不要使用内置函数作为标识符；

### 1.2 关键字
只有 True、False、None的首字母大写，其他关键字全部小写：
- 布尔与空：`True`（布尔真值）、`False`（布尔假值）、`None`（空值或缺失值）。
- 逻辑运算：`and`（逻辑与）、`or`（逻辑或）、`not`（逻辑非）、`in`（成员判断）、`is`（对象身份判断）。
- 流程控制：`if`/`elif`/`else`（条件分支）、`for`/`while`（循环）、`break`（跳出循环）、`continue`（跳过本次循环）、`pass`（空操作占位符）。
- 函数与类定义：`def`（定义函数）、`return`（函数返回值）、`lambda`（创建匿名函数）、`yield`（生成器返回值）、`class`（定义类）、`del`（删除对象）。
- 异常处理：`try`/`except`/`finally`（捕获和处理异常）、`raise`（主动抛出异常）、`assert`（断言检查）。
- 模块与作用域：`import`/`from`（导入模块）、`as`（创建别名）、`global`（声明全局变量）、`nonlocal`（声明外层变量）。
- 上下文与异步：`with`（上下文管理器，自动资源清理）、`async`/`await`（定义和调用异步协程）。

### 1.3 变量（弱类型）
在Python中为一个变量赋值的同时就声明了该变量，变量的数据类型根据赋值数据所属的类型推导出来，该变量还可以接收其他类型的数据。

### 1.4 语句
在Python中，一行代码表示一条语句，通常结尾不加分号。

### 1.5 注释
- 井号（#）+ 空格 + 注释内容。
- 通常代码第1行`# coding=utf-8`的注释很特殊，它告诉Python解释器该文件的编码集是UTF-8，该注释语句必须被放在文件的第1行或第2行才能有效。它还有替代写法:`# _*- coding: utf-8 _*-`。

### 1.6 模块
一个模块在本质上就是一个`文件`，在模块中封装了很多代码元素。
- `import＜模块名＞` # 导入模块的所有代码元素
- `from＜模块名＞import＜代码元素＞` # 导入模块中的代码元素
- `from＜模块名＞import＜代码元素＞as＜代码元素别名＞` # 如果名称有冲突，as使用别名

### 1.7 数据类型
在Python中所有的数据类型都是类，每个数据值都是类的“实例”；内置数据类型：`数字`、`字符串`、`列表`、`元组`、`集合`、`字典`。
- 的`数字`类型有4种：整数类型（int类）、浮点类型（float类）、复数类型（a+bi，a:实部,b:虚部,i:虚数单位）和布尔类型(bool类)。
- 在Python的数字类型中，除复数外，其他三种数字类型如整数、浮点和布尔都可以相互转换，分为隐式类型的转换（数学计算）和显式类型的转换（转换函数:int(),float(),bool()）。

### 1.8 运算符
- 算术运算符：加`+`、减`-`、乘`*`、除`/`、取余`%`、幂`**`、地板除法`//`。
- 比较运算符：`==`、`!=`、`>`、`<`、`>=`、`<=`。
- 逻辑运算符：逻辑与`and`、逻辑或`or`、逻辑非`not`。
- 位运算符：位与`&`、位或`|`、位反`~`、位异或`^`、左移`<<`、右移`>>`。eg:按位取反运算涉及原码、补码、反码运算，取巧的公式：`~a=-(a+1)`，即十进制数`127`按位取反为`-128`。
- 赋值运算符：`=`。

Python运算符优先级从高到低依次为：
括号`()`、幂`**`、一元`~x, +x, -x`、算术(乘/除/取余/地板除)`/, *, %, //`、算术(加/减)`+, -`、位移`<<, >>`、按位与`&`、按位异或`^`、按位或`|`、比较`<, <=, >, >=, ==, !=`、身份`is, is not`、成员`in, not in`、逻辑非`not`、逻辑与`and`、逻辑或`or`、赋值`=, +=, -=, 等`。

### 1.9 程序流程控制
- if语句：`if`、`if-else`、`if-elif-else`。
``` Python
# coding=utf-8
score = int(input("请输入一个0~100整数:"))
if score >= 90:
    grade = 'A' # 缩进推荐4个半角空格
elif score >= 60:
    grade ='B
else:
    grade ='F
print("Grade ="+ grade)
```

- while语句：`while`
``` Python
# coding=utf-8
i = 0
while i*i < 10:
    i += 1
    if i == 3:
        break # 在i==3时终止循环
    print(str(i) + '*' str(i) + '=', i*i)
else: # else子语句只有在循环体正常结束时才执行，这里while被break中断,else不会执行
    print('While Over!')
```

- for语句：`for-in`
``` Python
# coding=utf-8
for item in range(10):
    if item == 3:
        continue # 在i==3时终止本次循环，接着进行下次循环i==4
    print(item)
else: # for循环体未中断,执行else语句
    print('For over!')
```

## 2. 容器类型
在Python中，序列（列表、元组等）、集合和字典等可以容纳多项数据，我们称它们为容器类型的数据。
序列包括列表（list）、字符串（str）、元组（tuple）和字节序列（bytes）等。
- 序列中的元素都是有序的，每一个元素都带有序号，这个序号叫作`索引`。
    + 正序(左→右)从0开始到len-1即[0~(len-1)]，倒序(右→左)从-1开始到-len即[(-len)~(-1)]。
- 加（`+`）和乘（`*`）运算符也可以用于序列中的元素操作。加（`+`）运算符可以将两个序列连接起来，乘（`*`）运算符可以将两个序列重复多次。如：`'Hello'*2 == 'HelloHello'`，`'Hello'+'World' == 'HelloWorld'`。
- 切片运算符`[start：end：step]`就是从序列中切分出小的子序列；其中，`start`是开始索引（默认0），`end`是结束索引（默认序列的长度），`step`是步长（默认1，可以为负整数(倒序获取)）；切下的小切片包括`start`，但不包括`end`。

### 2.1 列表 list
列表（`list`）是一种`可变`序列类型，我们可以追加、插入、删除和替换列表中的元素。
- 创建列表
    - ① `list(iterable)`函数，参数iterable是可迭代对象（字符串、列表、元组、集合和字典等）;如`list('Hello')`创建的列表为:`['H','e','l','l','o']`。
    - ② `[元素1，元素2，元素3，⋯]`,指定具体的列表元素。
- 追加元素：`append(x)`方法，加（`+`）运算符或`extend(x)`方法。
``` Python
list = [20,10,50]
list.append(80) # [20, 10, 50, 80]
a = [60,30]
list += a       # [20, 10, 50, 80, 60, 30]
b = [70,90]
list.extend(b)  # [20, 10, 50, 80, 60, 30, 70, 90]
```
- 插入元素：`insert(i,x)`方法，其中`i`指定索引位置，`x`是要插入的元素。
- 替换元素：将列表下标索引元素进行赋值即可，如`list[0]=65`。
- 删除元素：`remove(x)`方法，如果找到多个匹配的元素，则只删除第一个匹配的元素。`。

### 2.2 元组 tuple
元组（`tuple`）是一种`不可变`序列类型。
- 创建元组
    - ① `tuple(iterable)`函数，参数iterable是可迭代对象（字符串、列表、元组、集合和字典等
    - ② `(元素1，元素2，元素3，⋯)`,指定具体的组元素，对于元组元素，可以使用小括号括起来，也可以省略小括号。
- 元组打包：创建元组，并将多个数据放到元组中，这个过程被称为元组打包。
- 元组拆包：是将元组中的元素取出，分别赋值给不同的变量。
``` Python
21,32,43,45    # 指定具体的组元素
               # (21, 32, 43, 45)
tuple('Hello') # tuple函数创建
               # ('H', 'e', 'l', 'l', 'o')
tuple([21,32,43,45]) # (21, 32, 43, 45)
1,  # 创建只有一个元素的元组 (1,)
()  # 创建空元组 () 
```

### 2.3 集合 set
集合（`set`）是一种可迭代的、无序的、不能包含重复元素的容器类型的数据。
- 创建集合
    - ① `set(iterable)`函数，参数iterable是可迭代对象（字符串、列表、元组、集合和字典等
    - ② `{元素1，元素2，元素3，⋯}`,指定具体的集合元素。
- 修改集合
    - ① `add(x)`添加元素，如果元素已经存在，则不能添加，不会抛出错误。
    - ② `remove(x)`删除元素，如果元素不存在，则抛出错误。
    - ③ `clear()`清除集合。

### 2.5 字典 dict
字典（`dict`）是可迭代的、通过键（`key`）值对来访问元素的可变的容器类型的数据。键不能重复，值可以重复。
- 创建字典
    - ① `dict()`函数。
    - ② `{key1：value1，key2：value2，⋯}`,指定具体的字典键值对。
``` Python
{100:'张三',101:'李四'} # 指定具体的字典键值对
                      # {100: '张三', 101: '李四'}
dict([(100,'张三'),(101,'李四')]) # dict()函数，传入列表
                      # {100: '张三', 101: '李四'}
dict(((100,'张三'),(101,'李四'))) # dict()函数，传入元组
                      # {100: '张三', 101: '李四'}
dict(zip([100,101],['张三','李四'])) # 通过zip()函数将两个可迭代对象打包成元组，第一个对象为键，第二个为值，它们元素个数相同，一一对应。
                      # {100: '张三', 101: '李四'}
```

- 修改字典：字典可以被修改，但都是针对键和值同时操作的，对字典的修改包括添加/替换（`dict[key]=value`）和删除（`pop(key)`）。
- 访问字典视图：`items()`返回字典的所有键值对视图。`keys()`返回字典键视图。`values()`返回字典值视图。
``` Python
d = {100:'张三',101:'李四',102:'王五'}
for s_id in d.keys():
    print('ID:' + str(s_id)) # ID:100  ID:101  ID:102
for s_name in d.values():
    print('姓名:' + s_name)  # 姓名:张三  姓名:李四  姓名:王五
for s_id,s_name in d.items():
    print('ID:{0},姓名:{1}'.format(s_id,s_name))
    # ID:100,姓名:张三  ID:101,姓名:李四  ID:102,姓名:王五
```

## 3. 字符串 str
在Python中,字符串(`str`)是一种不可变的字符序列，有三种表示方式：普通字符串、原始字符串、长字符串。

### 3.1 普通字符串
普通字符串：指用单引号`'`或双引号`"`括起来的字符串。
如果想在字符串中包含一些特殊的字符，例如换行符、制表符等，在普通字符串中就需要转义，前面要加上反斜杠`\`，这叫作字符转义，如`\n`（换行符）、`\t`（制表符）、`\\`（反斜杠自身）、`\'`（单引号）、`\"`（双引号）、`\r`（回车符）、`\b`（退格符）、`\f`（换页符）。

### 3.2 原始字符串
原始字符串(`raw string`)：特殊字符不需要被转义，按照字符串的本来样子呈现。在普通字符串前加`r`就是原始字符串，如`r'Hello'`。
``` Python
s1 = 'Hello\n World'
print(s1)
# Hello
#  World
s2 = r'Hello\n World'
print(s2)
# Hello\n World
```

### 3.3 长字符串
长字符串：使用三个单引号（`'''`）或三个双引号（`"""`）括起来。

### 3.4 字符串转换
字符串与数字相互转换：`str()`函数，`int()`函数，`float()`函数，
``` Python
str(123) # '123'
str(True) # 'True'
float('60.0') # 60.0
int('60') # 60
int('AB',16) # 171
```

### 3.5 字符串格式化
格式化字符串：`format()`方法与占位符（`{}`）表示
``` Python
i = 32
'i*i={}'.format(i*i) # 'i*i=1024'
'{0}*{0}={1}'.format(i,i*i) # '32*32=1024'
'{p1}*{p1}={p2}'.format(p1=i,p2=i*i) # '32*32=1024'
```

格式化控制符：对字符串的格式进行更加精准的控制，语法：{参数序号：格式控制符}（`{1:d}`）或{参数名：格式控制符}（`{p1:d}`）。
Python常用的格式化控制符包括`s`（字符串）、`d`（整数）、`f`（浮点数）、`x`（十六进制）、`o`（八进制）、`e`（科学计数法）等。
``` Python
'{0:s}年龄{1:d}，工资{2:f}元'.format('Tony',20,6868.00)
# 'Tony年龄20，工资6868.000000元'
'{p1:s}年龄{p2:d}，工资{p3:f}元'.format(p1='Tony',p2=20,p3=6868.00)
# 'Tony年龄20，工资6868.000000元'
'{%s}年龄{%d}，工资{%f}元'%('Tony',20,6868.00)
# '{Tony}年龄{20}，工资{6868.000000}元'
```

### 3.6 字符串操作
- 字符串查找：`str.find(sub[，start[，end]])`，表示在索引`start`到`end`之间查找子字符串`sub`，如果找到，则返回最左端位置的索引；如果没有找到，则返回-1。
- 字符串替换：`str.replace(old，new[，count])`，表示：用`new`子字符串替换`old`子字符串。`count`参数指定了替换old子字符串的个数，如果count被省略，则替换所有old子字符串。
- 字符串分割：`str.split(sep=None，maxsplit=-1)`，表示：使用sep子字符串分割字符串str。maxsplit是最大分割次数，如果maxsplit被省略，则表示不限制分割次数。
- 更多字符串操作：单击Windows“开始”菜单中的`Python 3.x Manuals`打开官方文档。


## 4. 函数
函数定义结构：
``` Python
def 函数名(参数列表):
    函数体
    return 返回值（可选）
```
函数在类中定义，称之为类的方法。

### 4.1 函数调用
调用函数（参数传递）
- 位置参数：实参与形参`按顺序匹配`;
- 关键字参数：通过`参数名=值`传递，无需考虑顺序;
- 默认参数：参数可指定默认值（需位于参数列表`末尾`），调用时可省略;
- 可变参数：
    + `*args`接收任意数量的位置参数（封装为`元组`）;
    + `**kwargs`接收关键字参数（封装为`字典`）;

返回值处理：return语句可返回`单个值`、`多个值`（封装为`元组`）或`无值`（默认返回`None`）。

``` Python
def rect_area(width, height):
     area = width * height
     print("width:{0},height:{1},面积:{2}".format(width,height,area))
     return area

rect_area(50,60)  # 实参与形参按顺序匹配
width:50,height:60,面积:3000
3000
rect_area(height=60,width=50) # 参数名=值,无需考虑顺序
width:50,height:60,面积:3000
3000
def sum(*nums):   # 元组可变参数
     total = 0.0
     for num in nums:
          total += num
     return total

print(sum(100.0,20.0,60.0))
180.0
def show_info(**infos):   # 字典可变参数
     for key,value in infos.items():
          print("{0}：{1}".format(key,value))

show_info(name="Tom", age=18, sex=True)
name：Tom
age：18
sex：True
```

### 4.2 变量的作用域与函数类型
函数中变量的作用域:
变量可以在模块中创建，作用域（变量的有效范围）是整个模块，被称为全局变量。变量也可以在函数中创建，在默认情况下作用域是整个函数，被称为局部变量。

函数类型:
函数的数据类型是`function`，被称为`函数类型`。任意类型的数据（包括函数）都可以作为函数返回值使用，还可以作为函数参数使用。

### 4.3 内置函数
Python内置函数：
- 过滤函数filter语法：`filter(function， iterable)`
    + 参数function是`过滤条件`函数，返回布尔值；
    + 参数iterable是容器类型的数据，如list等；
- 映射函数map语法：`map(function， iterable)`
    + 参数function是`变换规则`函数，返回变换之后的元素；
    + 参数iterable是容器类型的数据，如list等；
- 匿名函数lambda语法：`lambda 参数列表:函数体`（lambda函数体只有一条语句计算结果并返回，不需要return返回）

``` Python
data1 = [66,15,91,28,98,50,7,80,99]
filtered = filter(lambda x: (x > 50), data1)
list(filtered) # [66, 91, 98, 80, 99]
mapped = map(lambda x: (x + 10), data1)
list(mapped) # [76, 25, 101, 38, 108, 60, 17, 90, 109]
```

## 5. 类与对象
Python中的数据类型都是`类`，可以通过`class`关键字自定义类，即创建一种新的数据类型，`对象`是类的一个实例。
类的成员包括：属性，构造方法，成员变量(类变量，实例变量)，成员方法(类方法，成员方法)。
类变量和类方法属于类，通过类调用；实例变量和实例方法属于对象，通过对象调用。
``` Python
class Car(object): # 定义类
    pass # 类体
car = Car() # 实例化一个对象
```

- 属性：对类进行封装而提供的特殊方法。
- 构造方法：`__init__`，第1个参数是`self`，之后的参数用来初始化成员变量。调用构造方法时不需要传入self参数。
- 成员变量：数据成员（类或对象的数据）。
- 成员方法：在类中定义的函数。
    + 类方法：第1个参数是`类本身cls`，属于类，不属于个体实例。
    + 实例方法：第1个参数是`self`(实例本身)，是某个实例（或对象）个体特有的方法。

``` Python
class Account:
     interest_rate = 0.0668  # 类变量-利率
     def __init__(self, owner, amount):
          self.owner = owner   # 实例变量-账户名
          self.amount = amount # 实例变量-账户金额
     # 类方法
     @classmethod
     def interest_by(cls, amt):
          return cls.interest_rate * amt
interest = Account.interest_by(12000.0) # 调用类方法
print('计算利息：{0:.4f}'.format(interest)) # 计算利息：801.6000
```

### 5.1 封装性
封装性：封装隐藏了对象的内部细节，只保留有限的对外接口节，使得操作对象变得简单。
- 私有变量：Python中的变量默认是公有的，在变量前加上双下画线（`__`）变成私有变量。外部访问通过公有的`set`（赋值）和`get`（取值）方法访问。
- 私有方法：私有方法与私有变量的封装是类似的，在方法前加上双下画线（`__`）就是私有方法了。
- 属性：在两个方法前加上装饰器(`@property`和@`属性名.setter`)使得方法成为属性；替代了`get()`和`set()`这两个公有方法；属性使用起来类似于公有变量，可以在赋值符(=)左边或右边，左边被赋值，右边取值。

``` Python
class Dog:
    # 构造方法
    def __init__(self, name, age):
      self.__name = name # 私有变量name
      self.__age = age   # 私有变量age
    # get方法
    def get_age(self):
      return self.__age
    # set方法
    def set_age(self, age):
      self.__age = age
    @property
    def name(self): # 属性,替代get_name方法,方法名就是属性名
      return self.__name
    @name.setter
    def name(self, name): # 属性,替代set_name
      self.__name = name

# 实例化一个对象
dog = Dog('球球', 2)
print('{0}的年龄是{1}'.format(dog.name, dog.get_age())) # 球球的年龄是2
dog.set_age(3)
dog.name = '胖胖'
print('修改后，{0}的年龄是{1}'.format(dog.name, dog.get_age())) # 修改后，胖胖的年龄是3
```

### 5.2 继承性
继承性：子类继承父类，定义类时在类的后面使用一对小括号指定它的父类。
``` Python
class Animal:
    def __init__(self, name):
      self.name = name
    def infos(self):
      return '动物的名字：{0}'.format(self.name)

class Dog(Animal): # 指定父类Animal
    def __init__(self, name, age):
        super().__init__(name) # 调用父类构造方法
        self.age = age

# 实例化一个对象
dog = Dog('球球', 2)
print(dog.infos()) # 动物的名字：球球
```

- 子类继承父类时，只有`公有`的成员变量和方法才可以北继承。
- 当子类继承`多个父类`时，如果在多个父类中有相同的成员方法或成员变量，则子类优先继承左边父类中的成员方法或成员变量，`从左到右`继承级别从高到低。
- 方法重写：子类会重写（Override）父类的`同名方法`。


### 5.3 多态性
多态性：指对象可以表现出多种形态。在多个子类继承父类，并重写父类方法后，这些子类所创建的对象之间就是多态的。这些对象采用不同的方式实现父类方法。
- 鸭子类型：若看到一只鸟走起来像鸭子、游泳起来像鸭子、叫起来也像鸭子，那么这只鸟可以被称为鸭子。
- 由于支持`鸭子类型测试`，所以Python解释器不检查发生多态的对象是否继承了同一个父类，只要它们有相同的行为（方法），它们之间就是多态的。
``` Python
def start(obj): # 接收的obj对象具有speak()方法
    obj.speak()

class Animal:
    def speak(self):
        print('动物叫...')
class Dog(Animal):
    def speak(self):
        print('狗：旺旺叫...')
class Cat(Animal):
    def speak(self):
        print('猫：喵喵叫...')
class Car:
    def speak(self):
        print('汽车：滴滴叫...')
# start()函数可以接收所有speak()方法对象
start(Dog()) # 狗：旺旺叫...
start(Cat()) # 猫：喵喵叫...
start(Car()) # 汽车：滴滴叫...
```


## 6. 异常处理
`Traceback`是`异常堆栈信息`,描述了程序运行过程引发异常的信息。
``` Python
Traceback (most recent call last):
  File "test.py", line 1, in <module> # test.py文件第一行发生异常
    result = n / int(i)               # 发生异常的表达式
ZeroDivisionError: division by zero   # 异常信息描述,这里是除零异常 ZeroDivisionError
```
在Python中，异常类命名的主要后缀有`Exception`、`Error`和`Warning`。

### 6.1 异常捕获
捕获异常：通过`try-except`语句实现，语法：
``` Python
try
    <可能会引发异常的语句>
except [异常类型]:
    <处理异常>
finally:
    <释放资源>
```
一个`try`代码块后可以跟多个`except`代码块，但只能是最后一个`except`代码块省略异常类型。

``` Python
i = input('请输入数字：')
n = 8888
try:
    result = n / int(i)
    print('{0}除以{1}等于{2}'.format(n,i,result))
except (ZeroDivisionError, ValueError) as e: # 多个except处理类似可以合并
    print('除0或无效数字异常：{}'.format(e))
except:
    print('其他异常...')
finally:
    print('释放资源...')
```

### 6.2 自定义异常类
自定义异常类：实现自定义异常类，需要继承`Exception`类或其子类。
- 前面们遇到的ZeroDivisionError和ValueError异常都属于Exception的子类。
- 可以通过`raise语句`手动引发异常。

``` Python
class myException(Exception): # 自定义异常类
    def __init__(self, message): # message是异常描述信息
        message = '自定义异常：'+ message
        super().__init__(message) # 把message传给父类构造方法

i = input('请输入数字：')
n = 8888
try:
    result = n / int(i)
    print('{0}除以{1}等于{2}'.format(n,i,result))
except ZeroDivisionError as e:
    raise myException('不能除以0')
except ValueError as e:
    raise myException('输入数字无效')

请输入数字：0
Traceback (most recent call last):
  File "<python-input-0>", line 9, in <module>
    result = n / int(i)
ZeroDivisionError: division by zero
During handling of the above exception, another exception occurred:
Traceback (most recent call last):
  File "<python-input-0>", line 12, in <module>
    raise myException('不能除以0')
myException: 自定义异常：不能除以0
```


## 7. 常用内置模块
### 7.1 math（数学计算）
`math`：数学计算模块（ceil,floor,sqrt,sin等）
``` Python
import math
math.ceil(6.6)    # 7，向上取整
math.floor(6.6)   # 6，向下取整
math.pow(5,2)     # 25.0，5的2次幂
math.sqrt(9)      # 3.0，9的平方根
math.log(8, 2)    # 3.0，以2为底8的对数，若省略底默E为底计算自然对数
math.pi           # 3.141592653589793
math.degrees(0.5 * math.pi) # 90.0，弧度转换成角度
math.radians(90 / math.pi)  # 0.5，角度转换成弧度
math.sin(0.3)     # 0.29552020666133955
```

### 7.2 datetime（日期时间）
`datetime`：日期时间模块（datetime，date，time，timedelta， tzinfo）
- 日期时间：`datetime.datetime(year, month, day, hour=0, minute=0, second=0, microsecond=0, tzinfo=None)`:datetime(年,月,日,时,分,秒,微秒,时区)
``` Python
import datetime
datetime.datetime(2025,11,11)  # datetime.datetime(2025, 11, 11, 0, 0)
datetime.datetime.today()      # datetime.datetime(2025, 11, 11, 14, 29, 2, 955960)
datetime.datetime.now(tz=None) # datetime.datetime(2025, 11, 11, 14, 29, 2, 955960)
```
- 日期：`datetime.date(year, month, day)`:date(年,月,日)
``` Python
import datetime
datetime.date(2025,11,11) # datetime.date(2025, 11, 11)
datetime.date.today()     # datetime.date(2025, 11, 11)
datetime.date.fromtimestamp(1762842883) # datetime.date(2025, 11, 11)
```
- 时间：`datetime.time(hour=0, minute=0, second=0, microsecond=0, tzinfo=None)`:time(时,分,秒,微秒,时区)
- 时间跨度：`datetime.timedelta(days=0, seconds=0, microsecond=0, millisecond=0, minutes=0, hours=0, weeeks=0)`:timedelta(天,秒,微秒,毫秒,分钟,小时,周)
``` Python
import datetime
datetime.time(23,59,59,955960) # datetime.time(23, 59, 59, 955960)
datetime.timedelta(weeks=5)    # datetime.timedelta(days=35)

d = datetime.date.today()      # datetime.date(2025, 11, 11)
delta = datetime.timedelta(weeks=1) # datetime.timedelta(days=7)
d -= delta                     # datetime.date(2025, 11, 4)
```
- 日期时间与字符串相互转换
    + 将日期时间对象转换为字符串时，称之为`日期时间格式化`，使用`strftime(format)`方法。
    + 将字符串转换为日期时间对象的过程，叫作`日期时间解析`，使用`strptime(str,format)`方法。
``` Python
d = datetime.datetime.today()       # datetime.datetime(2025, 11, 11, 15, 9, 45, 770088)
s = d.strftime('%Y-%m-%d %H:%M:%S') # '2025-11-11 15:09:45'
d2 = datetime.datetime.strptime(s, '%Y-%m-%d %H:%M:%S') # datetime.datetime(2025, 11, 11, 15, 9, 45)
```
使用`strptime`方法时，提供的字符串应该可以表示一个有效的日期时间字符串，否则会发生`ValueError`异常。


### 7.2 re（正则表达式）
`re`：正则表达式模块
- `match(pattern, text)`函数:字符串匹配，`pattern`是正则表达式(字符串模板)，`text`是要验证的字符串。匹配成功返回一个Match对象(匹配对象)，否则返回None。
- `search(pattern, text)`函数:在text字符串中查找匹配的内容，如果找到，则返回`第1个`匹配的Match对象，否则返回None。
- `findall(pattern, text)`函数:在text字符串中查找匹配的内容，如果找到，则返回`所有`匹配的Match对象，否则返回None。
``` Python
m = re.match(r'\w+@test\.com', 'tony@test.com')
type(m)  # <class 're.Match'>
>>> m    # <re.Match object; span=(0, 13), match='tony@test.com'>
p = r'Java|java|JAVA'
text = 'I like Java and java and JAVA.'
m1 = re.search(p, text)
m2 = re.findall(p, text)
>>> m1    # <re.Match object; span=(7, 11), match='Java'>
>>> m2    # ['Java', 'java', 'JAVA']
```

- `re.sub(pattern, repl, string, count=0)`函数:字符串替换，参数pattern是正则表达式；参数repl是用于替换的新字符串；参数string是即将被替换的旧字符串；参数count是要替换的最大数量，默认值为零，表示不限制替换数量。
- `re.split(pattern, string, maxsplit=0)`函数:字符串分割，返回字符串列表对象。参数pattern是正则表达式；参数string是要分割的字符串；参数maxsplit是最大分割次数；maxsplit的默认值为零，表示分割次数没有限制。


## 8. 文件读写
文本文件的内部以字符形式存储数据，字符是有编码的，例如GBK(简体中文)、UTF-8等;
二进制文件的内部以字节形式存储数据，没有编码的概念。二进制文件较为常用，例如图片，音频，视频，可执行文件.exe等。

### 8.1 打开文件
打开文件：`open(file, mode='r', encoding=None, errors=None)`
+ file参数:文件，可以是字符串(文件名)或整数(已经打开的文件)。
+ mode参数:打开模式，`t`文本,`b`二进制,`r`只读,`w`只写,`x`独占创建,`a`追加,`+`更新(读写,必须与r、w或a组合使用)。
+ encoding参数:文件编码，默认`UTF-8`，主要用于打开文本文件。
+ errors参数:用来指定在文本文件发生编码错误时如何处理。推荐取值为'ignore'，表示在遇到编码错误时忽略该错误，程序会继续执行，不会退出。

mode参数字符串组合：
- `rt`或`r`：文本文件`只读`模式
- `wt`或`w`：文本文件`只写`模式
- `xt`或`x`：文本文件`独占创建`模式
- `at`或`a`：文本文件`追加`模式（只能追加写入，不可读文件）
- `r+`：文本文件`读写`模式，如果文件不存在，则`抛出异常`
- `w+`：文本文件`读写`模式，如果文件不存在，则`创建文件`
- `a+`：文本文件`读追加`模式，如果文件不存在，则`创建文件`
- `rb`：二进制文件`只读`模式
- `wb`：二进制文件`只写`模式
- `xb`：二进制文件`独占创建`模式
- `ab`：二进制文件`追加`模式（只能追加写入，不可读文件）
- `rb+`：二进制文件`读写`模式，如果文件不存在，则`抛出异常`
- `wb+`：二进制文件`读写`模式，如果文件不存在，则`创建文件`
- `ab+`：二进制文件`读追加`模式，如果文件不存在，则`创建文件`

### 8.2 关闭文件
- ①在`finally`代码块中使用`close()`关闭文件；
- ②在`with as`代码块中自动关闭文件（在`as`后面声明一个资源变量，在`with as`代码块结束之后自动释放资源）。
``` Python
with open('test.txt') as f:
    content = f.read()
    print(content)
```

### 8.3 读写文本文件
- `read(size=-1)`:从文件中读取字符串，`size`限制读取的字符数，`size=-1`指对读取的字符数没有限制。
- `readline(size=-1)`:在读取到换行符或文件尾时返回单行字符串。如果已经到文件尾，则返回一个空字符串。`size`是限制读取的字符数，`size=-1`表示没有限制。
- `readlines()`:读取文件数据到一个字符串列表中，每一行数据都是列表的一个元素。
- `write(s)`:将字符串s写入文件中，并返回写入的字符数。
- `writelines(lines)`:向文件中写入一个字符串列表。不添加行分隔符，因此通常为每一行末尾都提供行分隔符。
- `flush()`:刷新写缓冲区，在文件没有关闭的情况下将数据写入文件中。
``` Python
# coding=utf-8
with open('test.txt', 'r', encoding='gbk') as f:
    lines = f.readlines()
    with open('copy.txt', 'w', encoding='utf-8') as copy_f:
        copy_f.writelines(lines)
        print('文本文件复制成功！')
```

### 8.4 读写二进制文件
二进制文件的读写单位是字节，不需要考虑编码问题。
- `read(size=-1)`:从文件中读取字节，`size`限制读取的字节数，`size=-1`表示没有限制。
- `readline(size=-1)`:从文件中读取并返回一行。`size`是限制读取的行数，`size=-1`表示没有限制。
- `readlines()`:读取文件数据到一个字节列表中，每一行数据都是列表的一个元素。
- `write(b)`:写入b字节，并返回写入的字节数。
- `writelines(lines)`:向文件中写入一个字节列表。不添加行分隔符，因此通常为每一行末尾都提供行分隔符。
- `flush()`:刷新写缓冲区，在文件没有关闭的情况下将数据写入文件中。
``` Python
# coding=utf-8
with open('test.png', 'rb') as f:
    b = f.read()
    with open('copy.png', 'wb') as copy_f:
        copy_f.write(b)
        print('二进制文件复制成功！')
```


## 9. 网络通信
- `TCP/IP`：由IP（Internet Protocol,网际协议）和TCP（Transmission Control Protocol,传输控制协议）两个协议构成。
    + `IP`是一种`低级`的`路由`协议，它将数据拆分在许多小的数据包中，并通过网络将它们发送到某一特定地址，但无法保证所有包都抵达目的地，也不能保证包按顺序抵达。
    + 由于通过IP传输数据存在不安全性，所以还需要通过`TCP`进行`网络通信`。TCP是一种`高层次`的协议，是面向连接的可靠数据传输协议，如果有些数据包没被收到，则会重发，对数据包的内容准确性进行检查并保证数据包按顺序抵达。所以，TCP能够保证数据包安全地按照发送时的顺序送达目的地。
- `IP地址`：网络通信中，TCP/IP使用`IP地址`来标识`源地址`和`目的地址`。
    + `IPv4`：32位地址，4个8位的二进制数组成，约有43亿个可用地址，通常以点分十进制表示（如192.168.1.1）。地址资源枯竭，依赖NAT（网络地址转换）缓解短缺。
    + `IPv6`：128位地址，大约有3.4×10^38个地址，冒号分隔的十六进制（2001:0db8:85a3:0000:0000:8a2e:0370:7334，允许省略连续的零，即简写为2001:db8:85a3::8a2e:370:7334）。彻底解决地址不足，支持物联网（IoT）等海量设备接入。
- `端口`：如果把IP地址比作电话号码，那么端口就是分机号码。网络通信时需要同时指定IP地址和端口号。端口号用来识别同一台计算机中进行通信的不同应用程序。因此，它也被称为`程序地址`。
    + 端口号的范围是`0～65535`。将小于1024的端口号保留给预定义的服务，例如HTTP是80，FTP是21，Telnet是23，Email是25 等等。
- `HTTP/HTTPS`：
    + `HTTP`（Hypertext Transfer Protocol，超文本传输协议）属于`应用层协议`，使用端口80与TCP/IP通信。HTTP/1.1共定义了8种请求方法：OPTIONS、HEAD、GET、POST、PUT、DELETE、TRACE和CONNECT。GET和POST方法最常用。
    + `HTTPS`（Hypertext Transfer Protocol Secure，超文本传输安全协议）是超文本传输协议和`SSL`的组合，用于提供加密通信及对网络服务器身份的鉴定。简单地说，`HTTPS是加密的HTTP`。使用端口443与TCP/IP通信。

### 9.1 urllib.request 模块
`urllib.request`模块：通过Request对象发送网络请求（GET/POST）
``` Python
import urllib.request
url='http://localhost:8080/test.do'
# 创建Request对象，默认GET请求
req1 = urllib.request.Request(url)
# 准备POST请求参数(字节序列)
params = urllib.parse.urlencode({'id':'10'}).encode()
# 创建Request对象，提供了data参数就是POST请求
req2 = urllib.request.Request(url, data=params)
```

### 9.2 JSON数据
服务器返回的是`JSON (JavaScript Object Notation)`数据格式（JSON对象（object）和JSON数组（array））。
JSON数据的`解码（decode）`指将JSON数据转换为Python数据，当从网络中接收或从磁盘中读取JSON数据时，需要将其解码为Python数据。
使用`json模块`提供的`loads(str)函数`进行JSON数据的解码，参数str是JSON字符串，返回Python数据。
``` Python
import urllib.request
import json
url='http://localhost:8080/test.do'
# 创建Request对象，默认GET请求
req = urllib.request.Request(url)
with urllib.request.urlopen(req) as response:
    data = response.read()
    json_data = data.decode()
    print('JSON字符串:', json_data)
    py_dict = json.loads(json_data)
    for d_key,d_value in d.items():
        print('Python字典数据，key:{0},value:{1}'.format(d_key,d_value))
```

## 10. 访问数据库
数据库编程主要分为两类：查询（Read）和修改（C插入、U更新、D删除）。
在修改过程中如果执行SQL操作成功，则提交数据库事务；如果失败，则回滚事务。
`数据库事务(transaction)`是修改数据库的一系列操作，这些操作要么全部执行，要么全部不执行。若全部操作执行成功，则确定修改，称之为“`提交事务`”;如果有操作执行失败，则放弃修改，称之为“`回滚事务`”。

### 10.1 mysql-connector驱动器
使用`mysql-connector`（MySQL官方提供的驱动器）来连接使用`MySQL`。
``` Python
import mysql.connector
# 连接MySQL数据库
mydb = mysql.connector.connect(
  host="localhost", # 数据库主机地址
  user="test",      # 数据库用户名
  passwd="123456"   # 数据库密码
  database="test_db"
)
mycursor = mydb.cursor()
# 创建一个名为 test_db 的库
mycursor.execute("CREATE DATABASE test_db")
# 查看数据库
mycursor.execute("SHOW DATABASES")
# 创建一个名为 sites 的数据表
mycursor.execute("CREATE TABLE sites (name VARCHAR(255), url VARCHAR(255))")
# 查看数据表
mycursor.execute("SHOW TABLES")
# 创建一个主键，主键起始值为 1，逐步递增
mycursor.execute("ALTER TABLE sites ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY")
# 创建数据表时指定主键
mycursor.execute("CREATE TABLE sites (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), url VARCHAR(255))")
# 插入数据
sql = "INSERT INTO sites (name, url) VALUES (%s, %s)"
val = ("RUNOOB", "https://www.runoob.com")
mycursor.execute(sql, val)
mydb.commit() # 数据表内容有更新，必须使用到该语句
print("1 条记录已插入, ID:", mycursor.lastrowid)
# 批量插入
sql = "INSERT INTO sites (name, url) VALUES (%s, %s)"
val = [
  ('Google', 'https://www.google.com'),
  ('Github', 'https://www.github.com'),
  ('Taobao', 'https://www.taobao.com'),
  ('stackoverflow', 'https://www.stackoverflow.com/')
]
mycursor.executemany(sql, val)
mydb.commit()
print(mycursor.rowcount, "批量插入成功。")
# 查询数据
mycursor.execute("SELECT * FROM sites")
myresult = mycursor.fetchall()     # fetchall() 获取所有记录
# 查询数据-指定字段
mycursor.execute("SELECT name, url FROM sites")
myresult = mycursor.fetchall()     # 若 fetchone() 则只读取一条
# 删除记录
sql = "DELETE FROM sites WHERE name = 'stackoverflow'"
mycursor.execute(sql)
mydb.commit()
print(mycursor.rowcount, " 条记录删除")
# 更新数据
sql = "UPDATE sites SET name = %s WHERE name = %s"
val = ("Zhihu", "ZH")
mycursor.execute(sql, val)
mydb.commit()
print(mycursor.rowcount, " 条记录被修改")
# 删除表
sql = "DROP TABLE IF EXISTS sites"  # 删除数据表 sites
mycursor.execute(sql)
```

## 11. 多线程
一个`进程`就是一个正在执行的程序，每一个进程都有自己独立的一块内存空间、一组系统资源。
一个进程中可以包含多个`线程`，多个线程共享一块内存空间和一组系统资源。所以，系统在各个线程之间切换时，开销要比进程小得多。
`主线程`：Python程序至少有一个线程，即主线程，程序在启动后由Python解释器负责创建主线程，在程序结束后由Python解释器负责停止主线程。
在`多线程`中，主线程负责其他线程的启动、挂起、停止等操作。其他线程被称为子线程。
- `threading`线程模块：提供了多线程编程的高级API，线程类`Thread`，线程相关的函数等。
- 常用的线程相关的函数：
    + `active_count()`：返回当前处于活动状态的线程个数。
    + `current_thread()`：返回当前的Thread对象。
    + `main_thread()`：返回主线程对象。主线程是Python解释器启动的线程。
- 创建子线程：创建一个可执行的子线程，需要`线程对象`和`线程体`，子线程在启动后会执行线程体。
    + 线程对象：线程类Thread或Thread子类所创建的对象；
    + 线程体：①自定义函数实现线程体。②自定义线程类实现线程体。

### 11.1 自定义函数实现线程体
- 创建`Thread对象`的构造方法：`Thread(target=None, name=None, args=())`
    + target参数指向线程体函数；
    + name参数设置线程名,如果省略，则系统会为其分配一个名称；
    + args是为线程体函数提供的参数，是一个元组类型。

``` Python
import threading
import time
# 线程体函数
def thread_run():
    t = threading.current_thread() # 当前线程对象
    for n in range(5):
        print('第{0}次执行线程{1}'.format(n, t.name)) # 当前线程名
        # 线程休眠（只有当前线程休眠，其他线程才有机会执行）
        time.sleep(2)
    print('线程{0}执行完成！'.format(t.name))
# 主线程
# 创建线程对象t1
t1 = threading.Thread(target=thread_run)
# 创建线程对象t2
t2 = threading.Thread(target=thread_run, name='MyThread')
# 启动线程t1
t1.start()
# 启动线程t2
t2.start()
```
打印结果：
``` shell
第0次执行线程Thread-1 (thread_run)
第0次执行线程MyThread
第1次执行线程Thread-1 (thread_run)
第1次执行线程MyThread
第2次执行线程Thread-1 (thread_run)
第2次执行线程MyThread
第3次执行线程Thread-1 (thread_run)
第3次执行线程MyThread
第4次执行线程Thread-1 (thread_run)
第4次执行线程MyThread
线程Thread-1 (thread_run)执行完成！
线程MyThread执行完成！
```

### 11.2 自定义线程类实现线程体
创建一个`Thread子类`(继承Thread类)并重写`run()`方法
``` Python
import threading
import time
# 自定义线程类，继承Thread类
class SubThread(threading.Thread):
    def __init__(self, name=None):
        super().__init__(name=name)
    def run(self):
        t = threading.current_thread() # 当前线程对象
        for n in range(5):
            print('第{0}次执行线程{1}'.format(n, t.name)) # 当前线程名
            # 线程休眠（只有当前线程休眠，其他线程才有机会执行）
            time.sleep(2)
        print('线程{0}执行完成！'.format(t.name))
# 主线程
# 创建线程对象t1
t1 = SubThread()
# 创建线程对象t2
t2 = SubThread(name='MyThread')
# 启动线程t1
t1.start()
# 启动线程t2
t2.start()
```
打印结果：
``` shell
第0次执行线程Thread-1
第0次执行线程MyThread
第1次执行线程MyThread
第1次执行线程Thread-1
第2次执行线程MyThread
第2次执行线程Thread-1
第3次执行线程MyThread
第3次执行线程Thread-1
第4次执行线程MyThread
第4次执行线程Thread-1
线程MyThread执行完成！
线程Thread-1执行完成！
```

### 11.3 线程管理
`线程管理`包括线程`创建`、线程`启动`、线程`休眠`、`等待`线程结束和线程`停止`。
**线程等待**
假设`主线程`需要等待`t1子线程`结束才能继续执行，主线程调用`t1.join()`后主线程阻塞，等待t1结束后主线程继续执行。
`join()`方法的语法：`join(timeout=None)`，参数timeout用于设置超时时间，单位是秒。
**线程停止**
在线程体结束时，线程就停止了。但某些复杂业务会在线程体中执行一个“死循环”，通过判断`停止变量`来结束循环。在一般情况下，死循环会执行线程任务，然后休眠，再执行，再休眠，直到结束循环。

示例：网络爬虫程序每隔一段时间都会执行一次下载图片任务，在下载任务完成后，休眠一段时间再执行。这样反复执行，直到爬虫程序停止。
``` Python
import threading
import time

# 线程停止变量
isRunning = True

# 工作线程体函数
def workthread_run():
    while isRunning: # 死循环
        # 线程开始工作
        print('工作线程执行中...')
        # 线程休眠
        time.sleep(5) # 每5秒调用一次
    print('工作线程结束。')

# 控制线程体函数
def controlthread_run():
    global isRunning
    while isRunning: # 死循环
        # 从键盘输入停止指令exit
        command =input('请输入停止指令:')
        if command == 'exit':
            isRunning = False  # 修改停止变量
            print('控制线程结束。')

# 主线程
# 创建工作线程对象workthread
workthread =threading.Thread(target=workthread_run)
# 启动线程workthread
workthread.start()
# 创建控制线程对象controlthread
controlthread=threading.Thread(target=controlthread_run)
# 启动线程controlthread
controlthread.start()
```
打印结果：
``` shell
工作线程执行中...
工作线程执行中...
工作线程执行中...
工作线程执行中...
exit
控制线程结束。
工作线程结束。
```


## 12. 类型注解（Type Hints）
从 `Python3.6` 开始，可以直接为变量添加类型注解。
``` Python
# 没有类型注解的代码
name = "Alice"
age = 30
is_student = False
scores = [95, 88, 91]
def greet(name):
    return f"Hello, {name}"

# 有类型注解的代码
name: str = "Alice"         # 注解为字符串 (str)
age: int = 30               # 注解为整数 (int)
is_student: bool = False    # 注解为布尔值 (bool)
scores: list = [95, 88, 91] # 注解为列表 (list)
def greet(name: str) -> str: # 有类型注解的函数,参数和返回值都是字符串
    return f"Hello, {name}"
```

### 12.1 typing 模块
基本的 str, int, bool, list 很好用，复杂类型注解需要`typing`模块提供。
``` Python
from typing import List, Dict, Tuple, Set, Optional, Union

# List[int] 表示这是一个只包含整数的列表
numbers: List[int] = [1, 2, 3, 4, 5]
# Dict[str, int] 表示这是一个键为字符串、值为整数的字典
student_scores: Dict[str, int] = {"Alice": 95, "Bob": 88}
# Tuple[int, str, bool] 表示这是一个包含整数、字符串、布尔值的元组
person_info: Tuple[int, str, bool] = (25, "Alice", True)
# Set[str] 表示这是一个只包含字符串的集合
unique_names: Set[str] = {"Alice", "Bob", "Charlie"}
# 可选类型 Optional[str] 等价于 Union[str, None] 字符串或None
name: Optional[str] = "Alice"
# 联合类型 Union 当值可能是多种类型之一时使用 
def process_input(data: Union[str, int, List[int]]) -> None:
    """处理可能是字符串、整数或整数列表的输入"""
    if isinstance(data, str):
        print(f"字符串: {data}")
    elif isinstance(data, int):
        print(f"整数: {data}")
    elif isinstance(data, list):
        print(f"列表: {data}")
process_input("hello")    # 输出：字符串: hello
process_input(42)         # 输出：整数: 42  
process_input([1, 2, 3])  # 输出：列表: [1, 2, 3]
```

