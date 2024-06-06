import { useContext } from "react";
import {ThemeToggelContext} from "./themeContext";
function ContenInContext(params) {
    const context = useContext(ThemeToggelContext) 
    console.log(context);
    return(
        <p className={context.theme}>Một ứng dụng Back-end hiện đại có thể rất phức tạp, việc sử dụng code thuần (tự tay code từ đầu) không phải là một lựa chọn tốt. Vì vậy các Libraries và Frameworks ra đời nhằm đơn giản hóa, tiết kiệm thời gian và tiền bạc để nhanh chóng tạo ra được sản phẩm cuối cùng.</p>
    )
}
export default ContenInContext;