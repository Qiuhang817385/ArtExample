#!/usr/bin/env python
# coding: utf-8

# In[2]:


# 手动多分类
import torch
import torchvision
import torchvision.transforms as transforms
import numpy as np
from matplotlib import pyplot as plt
import torch.utils.data as Data
import sys


# In[5]:


train_dataset = torchvision.datasets.MNIST(
    root='/ Datasets/MNIST', train=True, download=True, transform=transforms.ToTensor())
test_dataset = torchvision.datasets.MNIST(
    root='/ Datasets/MNIST', train=False, transform=transforms.ToTensor())


# In[19]:


batch_size = 64
train_iter = torch.utils.data.DataLoader(
    train_dataset, batch_size=batch_size, shuffle=True, num_workers=0)
test_iter = torch.utils.data.DataLoader(
    test_dataset, batch_size=batch_size, shuffle=False, num_workers=0)


# In[20]:


for X, y in train_iter:
    print(X.shape, y.shape)
    break


# In[21]:


examples = iter(test_iter)
example_data, example_targets = examples.next()
for i in range(6):
    plt.subplot(2, 3, i+1)
    plt.imshow(example_data[i][0], cmap='gray')
plt.show()


# In[12]:


# 手动实现
# 模型参数定义及初始化
num_inputs, num_outputs, num_hiddens = 784, 10, 256
W1 = torch.tensor(np.random.normal(
    0, 0.01, (num_hiddens, num_inputs)), dtype=torch.float)
b1 = torch.zeros(num_hiddens, dtype=torch.float)
W2 = torch.tensor(np.random.normal(
    0, 0.01, (num_outputs, num_hiddens)), dtype=torch.float)
b2 = torch.zeros(num_outputs, dtype=torch.float)
params = [W1, b1, W2, b2]
for param in params:
    param.requires_grad_(requires_grad=True)


# In[25]:


# 选用激活函数
def relu(x):
    x = np.where(x >= 0, x, 0)
    return x


# In[14]:


# 定义模型
def net(X):
    X = X.view(-1, num_inputs)
    H = relu(torch.matmul(X, W1.t())+b1)
    return torch.matmul(H, W2.t())+b2


# In[15]:


loss = torch.nn.CrossEntropyLoss()
# 定义随机梯度下降函数


def SGD(params, lr):
    for param in params:
        params.data -= lr*param.grad


# In[16]:


# 计算模型在数据集上的准确率
def evaluate_accuracy(data_iter, net):
    acc_sum, n = 0.0, 0
    for X, y in data_iter:
        acc_sum += (net(X), argmax(dim=1) == y).float().sum().item()
        n += y.shape[0]
    return acc_sum/n


# In[17]:


# 定义模型训练函数
def train(net, train_iter, test_iter, loss, num_epochs, batch_size, lr=None, optimizer=None):
    for epoch in range(num_epochs):
        train_l_sum, train_acc_sum, n = 0.0, 0.0, 0
        for X, y in train_iter:
            y_hat = net(X)
            l = loss(y_hat, y).sum()  # 计算模型输出值和loss
           # 梯度清零
            if optimizer is not None:
                optimizer.zero_grad()
            elif params is not None and params[0].grad is not None:
                for params in params:
                    param.grad.data.zero_()
            l.backward()  # 采用反向传播
            if optimizer is None:
                SGD(params, lr)
            else:
                optimizer.step()
            train_l_sum += l.item()
            train_acc_sum += (y_hat.argmax(dim=1) == y).sum().item()  # 计算准确率
            n += y.shape[0]
        test_acc = evaluate_accuracy(test_iter, net)
        print('epoch %d,loss %4f,trian acc %.3f,test acc %.3f' %
              (epoch+1, train_l_sum/n, train_acc_sum/n, test_acc))


# In[24]:


num_epochs = 5
lr = 0.1
train(net, train_iter, test_iter, loss, num_epochs, batch_size, params, lr)


# In[ ]:


# 绘制loss曲线
x = np.linspace(0, len(train_loss), len(train_loss))
plt.plot(x, train_loss, label == "train_loss", linewidth=1.5)
plt.plot(x, test_loss.label == "test_loss", linewidth=1.5)
plt.xlabel("epoch")
plt.ylabel("loss")
plt.legend()
plt.show()


# In[ ]:
