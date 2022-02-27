### Kiến thức buổi học 

1. Khái niệm về biến và cách thức khai báo biến 
Ví dụ: let i = 0 
-> Ta sẽ thấy bao gồm 3 thành phần 
   +  Từ khóa khai báo let/var/const -> Phân biệt 3 từ khóa này 
   +  Tên biến i -> Đặt tùy ý tuy nhiên nên Dễ nhớ, có ý nghĩa và tuân theo 1 số quy tắc sau  https://freetuts.net/bien-va-khai-bao-bien-trong-javascript-265.html
   +  Giá trị biến 0 -> Có thể gán giá trị biến ngay khi khởi tạo hoặc không gán giá trị 

2. Các kiểu dữ liệu 
   + Number: Kiểu số. Ví dụ: let age = 50
   + String: Kiểu kí tự . Ví dụ : let name = "Long"
   + Boolean: Kiểu đúng sai. Ví dụ: isRainning = true
   + Một số kiểu khác: null, undefined, NaN,...  

3. Các phép toán 
   + Phép cộng +  
   + Phép nhân *
   + Phép chia / 
   + Phép trừ - 
   + Phép chia lấy dư %. Ví dụ 5 % 2 = 1 
-> Một số trường hợp đặc biệt cần lưu ý tránh sai (Number + String) -> String -> Ưu tiên string hơn 
                                                  (String - String) -> NaN, 
                                                  (String * String) -> NaN/Number (Nếu String đó có khả năng chuyển đổi sang số)   
                                                        Ví dụ: "5"*"5" = 25, "hello"*"5" = NaN 
            
4. Các phép so sánh 
   + Lớn hơn >
   + Lớn hơn bằng >=
   + Bằng ==
   + Khác != 
   + Nhỏ hơn <
   + Nhỏ hơn bằng <=         
5. Câu lệnh điều kiện if..else if...else 
   + Các phép so sánh sẽ trả về các giá trị true/false 
   + Câu lệnh được thực hiện theo nhanh nào phụ thuộc vào giá trị true/false này 
Ví dụ : Kiểm tra 1 số dương hay âm 
let a = 5
if(a > 0) { 
    console.log("a là số dương")
}else if (a < 0){ 
    console.log("a là số âm")
}else {  // Các trường hợp còn lại ví dụ a == 0 hoặc a không phải là số 
    console.log("a không phải số dương cũng không phải số âm")
}
-> Đoạn lệnh này sẽ vào nhánh "a là số dương" do a > 0 trả về giá trị true 


### BTVN
1. Viết đoạn lệnh tìm nghiệm của pt ax^2 + bx + c = 0. Yêu cầu chi tiết là ảnh trên zalo  

### Kiến thức cần tìm hiểu 
1. Có 2 kiểu dữ liệu khác rất quan trọng và được sử dụng nhiều sau này là `Array` và `Object`
2. Các bạn search gg để tìm hiểu trước cho anh 2 kiểu dữ liệu này 
3. Khi tương tác với 2 kiểu dữ liệu này chúng ta quan tâm tới 4 từ quan trọng CRUD 
   + C: create -> Cách thức khởi tạo 1 biến có kiểu Array/Object 
   + R: read -> Cách đọc và in ra dữ liệu tại 1 vị trí trong array/object hoặc nhiều vị trí cùng lúc 
   + U: update -> Cách cập nhật giá trị tại 1 vị trí trong array/object
   + D: delete -> Cách xóa giá trị tại 1 vị trí trong array/object   
4. Để cập nhật hoặc đọc dữ liệu tại nhiều vị trí ta sẽ dùng `vòng lặp for` -> Cho phép thực hiện các công việc giống nhau theo 1 cách viết ngắn gọn 
