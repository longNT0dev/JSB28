### Kiến thức buổi học 

1. Tìm hiểu về kiểu dữ liệu mới Array 
    + Cần phân biệt tên mảng, chỉ số của mảng và giá trị tại chỉ số đó 
    Ví dụ: let arr = [ 1, 5, "name",...]
    -> arr là tên mảng (nó cũng là tên 1 biến, các bạn có thể đặt tùy ý)
    -> 1, 5 hay "name" là giá trị của các phần tử 
    -> arr[0], arr[1] thì 0 và 1 là chỉ số, nó sẽ lấy ra giá trị tại các vị trị 0 và 1 của mảng cụ thể là giá trị 1 và 5 
    
2. Tìm hiểu về CRUD đối với từng kiểu dữ liệu 
    + Create: Các phần tử trong mảng có thể là mọi kiểu dữ liệu đã học trước đó (string,number,....) 
        let arr = [ 1, 5, "name",...]
    + Read: Đọc giá trị dựa vào `chỉ số` các phần tử trong mảng 
        console.log(arr[0])
    + Update: Cập nhật giá trị dựa vào `chỉ số` các phần tử trong mảng hoặc thêm vào mảng các phần tử mới 
        * Cập nhật arr[0] = 6 
          Khi đó ta có mảng mới arr [6, 5, "name",....]
        * Thêm arr.push("Phần tử mới")  -> push sẽ thêm phần tử mới vào cuối mảng 
    + Delete: pop hoặc shift 
 Link các phương thức trên: https://alligator.io/js/push-pop-shift-unshift-array-methods/
    
 3. Tìm hiểu về vòng lặp for: Thực hiện các công việc lặp đi lặp lại trong code, sử dụng để duyệt mảng 
    for(let i = 0; i< 5; i++) {
        // code khác 
    }
    
    + Vòng lặp for nhận vào 4 phần chính 
    + Giá trị khởi tạo i = 0 -> Chỉ khởi tạo 1 lần duy nhất 
    + Điều kiện kết thúc i < 5 -> Nếu khi thay đổi i không thỏa mãn điều kiện sẽ dừng 
    + Giá trị thay đổi sau mỗi lần lặp -> Mỗi lần lặp tăng i lên 1 theo code trên (có thể tăng thậm chí giảm tùy vào mục đích) 
    + Các đoạn code khác -> Ví dụ như in ra các phần tử của mảng 
          
          
          
 ### BTVN
 1. Write a simple JavaScript program to join all elements of the following array into a string.
 Ví dụ: ["I","am", "a", "student"] -> Ta sẽ thu được kết quả cuối cùng "I am a student" 
 
2. Cho mảng arr = [1,2,3,4,5,6]
Yêu cầu
  2.1. Hãy tăng giá trị của các phần tử lên 3 đơn vị 
  2.2. Hãy in ra "chỉ số" mà tại đó giá trị của nó là 1 số lẻ 
  2.3. Hãy in ra "chỉ số" mà tại đó giá trị của nó là 1 số > 4  
 
 ### Kiến thức cần tìm hiểu
 _ Các bạn đọc lại và có thể tự làm thêm các bài tập khác vì array là phần kiến thức quan trọng 
 _ Dựa vào CRUD của array hãy tìm hiểu CRUD của object 
 
 
