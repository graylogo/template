## nodeJS 搭建简单接口
 
知识点： node  mysql 

 根据 [这个教程](https://www.bilibili.com/video/BV1KX4y1K7uz?p=16)来搭建的

 ### 接口
 - **获取博客列表**
 > api/blog/list   
 * @param  {[title]}   标题
 * @param  {[author]}   作者

- **获取博客详情**
>  /api/blog/detail
 * @param  {[id]}   文章id

 - **增加博客**
> /api/blog/add
  * @methods POST
 * @param  {[title]}   标题
 * @param  {[author]}   作者
 * @param  {[content]}   内容

 - **更新博客**
 > /api/blog/update
 * @methods POST
 * @param  {[id]}   文章id   地址栏
 * @param  {[title]}   标题
 * @param  {[author]}   作者
 * @param  {[content]}   内容

  - **删除博客**
  >  /api/blog/delete
* @methods POST
 * @param  {[id]}   文章id  地址栏