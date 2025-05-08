'use client';

import { memo } from 'react';
import { useLanguage } from "@/context/LanguageContext";
import CategoryProductLayout from "../CategoryProductLayout";
import ProductDetail from "../ProductDetail";

const CinnamonPage = memo(() => {
  const { t } = useLanguage();
  
  const cinnamonImages = [
    {
      src: '/images/pages/category/Cinnamon/cinnamon1.webp',
      alt: 'Vỏ quế nguyên cây chất lượng cao của Tấn Tài',
      width: 800,
      height: 600
    },
    {
      src: '/images/pages/category/Cinnamon/cinnamon2.webp',
      alt: 'Quy trình chế biến và đóng gói quế tại nhà máy',
      width: 800,
      height: 600
    },
    {
      src: '/images/pages/category/Cinnamon/tablecinnamon.webp',
      alt: 'Bột quế và tinh dầu quế nguyên chất xuất khẩu',
      width: 800,
      height: 600
    }
  ];

  const cinnamonContent = (
    <>
      <h2 className="text-3xl font-bold mb-6 text-center">QUẾ</h2>
      <h3 className="text-xl font-semibold mb-6 text-center text-muted-foreground">Thông tin chi tiết</h3>
      
      <div className="space-y-6">
        <p>
          Tấn Tài Trading tự hào là một trong những đơn vị xuất khẩu quế hàng đầu tại Việt Nam, với bề dày kinh nghiệm và uy tín trên thị trường quốc tế. Chúng tôi chuyên cung cấp các sản phẩm quế chất lượng cao từ những vùng quế nổi tiếng của Việt Nam như Yên Bái, Quảng Nam, và Quảng Ngãi.
        </p>
        
        <p>
          Quế Việt Nam (Cinnamomum cassia) được đánh giá cao trên thị trường thế giới nhờ hàm lượng tinh dầu dồi dào, mùi thơm nồng nàn và vị cay đặc trưng. Quế của Tấn Tài được thu hoạch từ những cây quế có tuổi đời từ 15-20 năm, đảm bảo hàm lượng cinnamaldehyde cao (2.5-3.5%) - thành phần quyết định đến chất lượng và giá trị của quế.
        </p>
        
        <p>
          Chúng tôi cung cấp đa dạng sản phẩm quế để đáp ứng nhu cầu của khách hàng, bao gồm vỏ quế nguyên cây (quế hộp), quế cắt khúc, quế vụn, bột quế và tinh dầu quế nguyên chất. Tất cả sản phẩm đều trải qua quy trình chế biến nghiêm ngặt, từ khâu thu hái, phơi sấy, xử lý đến phân loại và đóng gói.
        </p>
        
        <p>
          Với hệ thống nhà máy hiện đại và phòng kiểm nghiệm chất lượng, Tấn Tài đảm bảo sản phẩm quế đạt các tiêu chuẩn an toàn thực phẩm quốc tế như HACCP, ISO 22000, KOSHER và FDA. Chúng tôi chú trọng kiểm soát các chỉ tiêu quan trọng như độ ẩm, tạp chất, hàm lượng tinh dầu, vi sinh vật và dư lượng thuốc trừ sâu.
        </p>
        
        <p>
          Hiện nay, sản phẩm quế của Tấn Tài được xuất khẩu đến nhiều thị trường lớn như Mỹ, EU, Nhật Bản, Hàn Quốc, Trung Đông và châu Úc. Chúng được ứng dụng rộng rãi trong ngành công nghiệp thực phẩm, đồ uống, dược phẩm, mỹ phẩm và hương liệu.
        </p>
        
        <p>
          Tấn Tài không chỉ chú trọng đến chất lượng sản phẩm mà còn cam kết phát triển bền vững. Chúng tôi hợp tác với nông dân địa phương, khuyến khích họ áp dụng các phương pháp canh tác hữu cơ và bền vững, đồng thời thực hiện các chương trình tái trồng rừng quế để bảo vệ môi trường và đảm bảo nguồn nguyên liệu lâu dài.
        </p>
      </div>
    </>
  );

  return (
    <CategoryProductLayout 
      title={t("nav.products_items.cinnamon") || "QUẾ"}
      heroImageUrl="/images/pages/category/Cinnamon/cinnamon1.webp"
    >
      <ProductDetail 
        content={cinnamonContent}
        images={cinnamonImages}
        imageLayout="gallery"
      />
    </CategoryProductLayout>
  );
});

CinnamonPage.displayName = 'CinnamonPage';

export default CinnamonPage; 