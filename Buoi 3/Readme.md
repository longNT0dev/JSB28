### Kiến thức buổi học 

1. Phân biệt các giá trị của thuộc tính `display`
    1.1. block: Có thể thay đổi width,height và các thẻ không nằm trên cùng 1 dòng 
    1.2. inline: Không thể thay đổi width,height và các thẻ có thể nằm cùng dòng 
    1.3. inline-block: Vừa có thể nằm trên cùng 1 dòng vừa có thể thay đổi width,height
    1.4. flex: Một `cách thức` để xây dựng giao diện dễ dàng hơn. Các thuộc tính đi kèm sẽ nói rõ hơn ở dưới
2. Các thuộc tính đi cùng `display:flex`
    2.1. flex-direction: Xác định trục chính và trục phụ (mặc định trục chính theo chiều ngang nếu k dùng)
    2.2. justify-content: Căn các phần tử theo trục chính 
    2.3. align-items: Căn các phần tử theo trục phụ 
    2.4. flex-wrap: Chỉ định các thẻ có `tự xuống dòng` khi hết khoảng trống hay không
    2.5. Phân biệt các `giá trị` space-between, space-around, space-evently khi sử dụng cùng 2 thuộc tính 2.2 và 2.3   
    * Lưu ý: 3 thuộc tính trên cần đặt ở thẻ cha chứa các phần tử bên trong `không phải` ở thẻ con 
    2.6. Bên cạnh đó còn 1 số thuộc tính nữa các bạn có thể lên search để tìm hiểu thêm, tuy nhiên chủ yếu sẽ dùng 3 cái ở trên
3. Position: relative, absolute, fixed 
   3.1. relative: Chỉ định `thẻ cha` làm mốc cho các `thẻ con absolute` đi theo kết hợp với top,left,right,bottom   
   3.2. fixed: Cố định vị trí của 1 thẻ trên trang (thường dùng với navbar)

### BTVN

1. Dựa vào hình ảnh template.png
    1.1. Xây dựng giao diện giống hình trên (Không phải dùng thẻ img rồi ném src ảnh này vào đâu nhé 👲👲)
    1.2. Hãy phân tích thanh navbar này thành các khối và sử dụng kiến thức về flex để căn chỉnh 
    1.3. logo của thanh navbar là ảnh logo.svg dùng trong thẻ img như bình thường
    1.4. Hãy cung cấp cho thẻ html,body thuộc tính height: 3000px 
    1.5. Nghĩ cách để khi cuộn chuột xuống thanh navbar sẽ đi theo 
    1.6. Khi người dùng bấm vào Dashboard hay Teams,... sẻ chuyển hướng người dùng tới trang html tương ứng
    1.7. `Kiến thức a yêu cầu tìm hiểu cũng là gợi ý cho bài tập này` 


### Kiến thức cần tìm hiểu 

1. ul, li và thuộc tính css list-style: none  
2. Các e sẽ thấy có 1 icon thông báo trên thanh nav. Các e lên trang này xem và tìm hiểu cách dùng nhé 
`https://fontawesome.com/`
3. Khi dùng fontawesome ở trên sẽ có lỗi. Mấy bạn cần thêm link này vào thẻ head (Nhúng để nói rằng chúng ta sử dụng của 
người khác) 
`<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" integrity="sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA==" crossorigin="anonymous" referrerpolicy="no-referrer" />` 

   