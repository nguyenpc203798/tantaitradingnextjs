'use client';

import { memo } from 'react';
import { useLanguage } from "@/context/LanguageContext";
import CategoryProductLayout from "../CategoryProductLayout";
import ProductDetail from "../ProductDetail";

const AnisePage = memo(() => {
  const { t } = useLanguage();
  
  const aniseImages = [
    {
      src: '/images/pages/category/StarAnise/staranise1.webp',
      alt: 'Hoa hồi khô nguyên sao chất lượng cao',
      width: 800,
      height: 600
    },
    {
      src: '/images/pages/category/StarAnise/staranise2.webp',
      alt: 'Quy trình phân loại và đóng gói hoa hồi tại nhà máy Tấn Tài',
      width: 800,
      height: 600
    },
    {
      src: '/images/pages/category/StarAnise/tablestaranise.webp',
      alt: 'Tinh dầu hoa hồi tinh khiết sản xuất theo công nghệ hiện đại',
      width: 800,
      height: 600
    }
  ];

  const aniseContent = (
    <>
      <h2 className="text-3xl font-bold mb-6 text-center">HOA HỒI</h2>
      <h3 className="text-xl font-semibold mb-6 text-center text-muted-foreground">Thông tin chi tiết</h3>
      
      <div className="space-y-6">
        <p>
          Tấn Tài Trading là đơn vị hàng đầu trong lĩnh vực thu mua, chế biến và xuất khẩu hoa hồi (đại hồi) tại Việt Nam. Chúng tôi có mối quan hệ bền chặt với các vùng trồng hoa hồi chất lượng cao tại các tỉnh phía Bắc, đặc biệt là Lạng Sơn và Quảng Ninh - nơi có điều kiện địa lý và khí hậu lý tưởng cho cây hồi phát triển.
        </p>
        
        <p>
          Hoa hồi của Tấn Tài được thu hoạch từ những cây hồi trưởng thành (trên 15 năm tuổi), đảm bảo hàm lượng tinh dầu cao và chất lượng tối ưu. Quy trình thu hái được thực hiện thủ công, cẩn thận để không làm tổn hại đến cánh hoa. Sau khi thu hoạch, hoa hồi được xử lý, phơi sấy và bảo quản trong điều kiện nghiêm ngặt để giữ nguyên hương vị và dược tính.
        </p>
        
        <p>
          Sản phẩm hoa hồi của Tấn Tài được phân loại thành nhiều cấp chất lượng dựa trên kích thước, màu sắc, hàm lượng tinh dầu và độ nguyên vẹn, đáp ứng đa dạng nhu cầu của thị trường. Chúng tôi cung cấp hoa hồi nguyên sao (loại đặc biệt, loại 1, loại 2), hoa hồi vụn, và tinh dầu hoa hồi nguyên chất.
        </p>
        
        <p>
          Với công nghệ chế biến hiện đại và quy trình kiểm soát chất lượng nghiêm ngặt, Tấn Tài đảm bảo sản phẩm hoa hồi đạt tiêu chuẩn an toàn thực phẩm quốc tế, không chứa độc tố, thuốc trừ sâu hay tạp chất. Toàn bộ quy trình sản xuất tuân thủ các tiêu chuẩn ISO 22000, HACCP và FDA.
        </p>
        
        <p>
          Hoa hồi của Tấn Tài không chỉ được sử dụng trong ngành công nghiệp thực phẩm như gia vị, đồ uống, mà còn được ứng dụng rộng rãi trong ngành dược phẩm, mỹ phẩm và hương liệu. Hiện nay, sản phẩm hoa hồi của chúng tôi được xuất khẩu sang nhiều thị trường lớn như Mỹ, EU, Ấn Độ, Trung Đông và các nước Đông Nam Á.
        </p>
      </div>
    </>
  );

  return (
    <CategoryProductLayout 
      title={t("nav.products_items.anise") || "HOA HỒI"}
      heroImageUrl="/images/pages/category/StarAnise/staranise1.webp"
    >
      <ProductDetail 
        content={aniseContent}
        images={aniseImages}
        imageLayout="gallery"
      />
    </CategoryProductLayout>
  );
});

AnisePage.displayName = 'AnisePage';

export default AnisePage; 