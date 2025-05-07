'use client';

import { memo } from 'react';
import { useLanguage } from "@/context/LanguageContext";
import IndustryProductLayout from "../IndustryProductLayout";
import ProductDetail from "../ProductDetail";

const CoffeePage = memo(() => {
  const { t } = useLanguage();
  
  const coffeeImages = [
    {
      src: '/images/pages/industry/Coffee/coffee1.webp',
      alt: 'Hạt cà phê Robusta và Arabica chất lượng cao',
      width: 800,
      height: 600
    },
    {
      src: '/images/pages/industry/Coffee/coffee2.webp',
      alt: 'Quá trình thu hoạch cà phê tại đồn điền Tấn Tài',
      width: 800,
      height: 600
    },
    {
      src: '/images/pages/industry/Coffee/coffee3.webp',
      alt: 'Nhà máy chế biến cà phê hiện đại của Tấn Tài',
      width: 800,
      height: 600
    },
    {
      src: '/images/pages/industry/Coffee/bangcoffee.webp',
      alt: 'Cà phê Tấn Tài đạt tiêu chuẩn quốc tế',
      width: 800,
      height: 600
    }
  ];

  const coffeeContent = (
    <>
      <h2 className="text-3xl font-bold mb-6 text-center">CÀ PHÊ</h2>
      <h3 className="text-xl font-semibold mb-6 text-center text-muted-foreground">Thông tin chi tiết</h3>
      
      <div className="space-y-6">
        <p>
          Cà phê từ lâu đã trở thành thức uống yêu thích của hàng triệu người trên thế giới. Trong đó, hai loại cà phê phổ biến nhất, Robusta và Arabica, nổi tiếng nhờ hương vị đặc trưng và chất lượng vượt trội. Với lợi thế địa lý, điều kiện thời tiết thuận lợi, cùng chi phí sản xuất cạnh tranh, Việt Nam đã khẳng định vị thế là một trong những quốc gia sản xuất cà phê hàng đầu thế giới.
        </p>
        
        <p>
          Công ty Tấn Tài tự hào đóng góp vào sự phát triển ngành cà phê Việt Nam với hệ thống nhà máy chế biến hiện đại, đặt ngay tại vùng nguyên liệu. Đặc biệt, chúng tôi đang đầu tư vào nhà máy cafe phê hòa tan với quy mô là một trong ba nhà máy duy nhất tại Việt Nam đầu tư công nghệ sấy lạnh tiên tiến, đáp ứng các tiêu chuẩn quốc tế. Chúng tôi cung cấp đa dạng các loại cà phê Robusta và Arabica nhân xanh chưa rang, bao gồm Robusta chế biến khô và Arabica chế biến ướt, chế biến khô và cà phê rang xay sấy phun ( rang nhẹ, rang vừa, rang đậm), cà phê hòa tan sấy lạnh, dịch cà phê trích ly. 
        </p>
        
        <p>
          Với cam kết về chất lượng, sự đổi mới không ngừng và tập trung vào khách hàng, Công ty Tấn Tài luôn nỗ lực trở thành đối tác đáng tin cậy, mang đến những sản phẩm cà phê chất lượng cao, góp phần nâng tầm giá trị nông sản Việt Nam trên thị trường quốc tế.
        </p>
      </div>
    </>
  );

  return (
    <IndustryProductLayout 
      title={t("nav.products_items.coffee")}
      heroImageUrl="/images/pages/industry/Coffee/coffee1.webp"
    >
      <ProductDetail 
        content={coffeeContent}
        images={coffeeImages}
        imageLayout="gallery"
      />
    </IndustryProductLayout>
  );
});

CoffeePage.displayName = 'CoffeePage';

export default CoffeePage; 