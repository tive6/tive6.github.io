# 修改

### 注释打赏功能

* 位置`article.ejs`

```ejs
<!-- 增加打赏功能 -->
  <% if (!index && theme.donate){ %>
  <%- partial('donate') %>
  <% } %>
```