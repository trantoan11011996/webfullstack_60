//------------------ Express ---------------

/*
    - Mô hình MVC : 
        -Model : xử lí các method liên quan đến dữ liệu
        -View : thành phần user tương tác với trang web
        -Controllẻr : xử lí logic app


        template engines : tạo html ở phần view, chứa css, variable, các hàm...
        các template thông dụng : handlebars , Pug, EJS -> khuyến kích dùng Ejs
        nếu k dùng reactjs dể xây dựng web thì dùng nodejs + template để tạo nên 1 trang web hoàn chỉnh

        luồng chạy : submit + request -> routing -> controler : controler xử lí chuyển xuống model để giao tiếp với database
        -> database trả về dữ liệu cho controler->controler xử lí xử liệu ( là các kết quả - vd : hàm login user)
        -> dữ liệu được hiển thị lên view (ví dụ : k có người dùng trong database => trả ra thông báo k có ng dùng tồn tại)


        bắt đầu 1 projet : 
        npm init 
        npm i express
        npm i nodemon

        restfull api : là 1 cổng để client connect tới để lấy dữ liệu và dạng trả về là JSON

        các thư viện validate data : joi validate , express validation ( các thư viện kiểm tra dữ liệu đc gởi lên server )
        express-generator : thư viện - tool định hình thư viện cấu trúc
*/