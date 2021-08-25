import React from "react";

const LeftContent = () => {
  return (
    <div>
      <ul>
        <li>
          <img
            src="https://theme.hstatic.net/1000230347/1000729967/14/phone-call.png?v=956"
            alt="phone"
          />
          <div>
            <span>Hỗ trợ khách hàng</span>
            <a href="tel:1900866819" title="1900 866 819">
              1900 866 819
            </a>
          </div>
        </li>
        <li>
          <i class="fas fa-user-circle"></i>
          <div>
            <a href="#">Tài Khoản</a>
            <a href="#">Đăng Nhập</a>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default LeftContent;
