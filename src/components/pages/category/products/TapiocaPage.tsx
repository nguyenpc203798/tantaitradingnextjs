'use client';

import { memo } from 'react';
import { useLanguage } from "@/context/LanguageContext";
import CategoryProductLayout from "../CategoryProductLayout";
import ProductDetail from "../ProductDetail";

const TapiocaPage = memo(() => {
  const { t } = useLanguage();
  
  const tapiocaImages = [
    {
      src: '/images/pages/category/TapiocaStarch/topiocastartch1.webp',
      alt: 'Tinh bột sắn chất lượng cao Tấn Tài',
      width: 800,
      height: 600
    },
    {
      src: '/images/pages/category/TapiocaStarch/topiocastartch2.webp',
      alt: 'Quy trình sản xuất tinh bột sắn tại nhà máy Tấn Tài',
      width: 800,
      height: 600
    },
    {
      src: '/images/pages/category/TapiocaStarch/topiocastartch3.webp',
      alt: 'Sản phẩm tinh bột sắn đóng gói xuất khẩu',
      width: 800,
      height: 600
    }
  ];

  const tapiocaContent = (
    <>
      <h2 className="text-3xl font-bold mb-6 text-center">TINH BỘT SẮN</h2>
      <h3 className="text-xl font-semibold mb-6 text-center text-muted-foreground">Thông tin chi tiết</h3>
      
      <div className="space-y-6">
        <p>
          Tinh bột sắn là một trong những sản phẩm nông sản chủ lực của Việt Nam, được sử dụng rộng rãi trong ngành thực phẩm, dược phẩm, và công nghiệp. Công ty Tấn Tài tự hào là đơn vị tiên phong trong việc sản xuất và cung ứng tinh bột sắn chất lượng cao, đáp ứng nhu cầu ngày càng tăng của thị trường trong nước và quốc tế.
        </p>
        
        <p>
          Với vùng nguyên liệu sắn ổn định như Tây Ninh, Đồng Nai,... và đội ngũ kỹ thuật chuyên môn cao, Công ty Tấn Tài đã đầu tư xây dựng nhà máy chế biến hiện đại, được trang bị công nghệ tiên tiến nhằm đảm bảo chất lượng sản phẩm vượt trội. Quy trình sản xuất tinh bột sắn của chúng tôi tuân thủ nghiêm ngặt các tiêu chuẩn an toàn thực phẩm quốc tế.
        </p>
        
        <p>
          Công ty Tấn Tài đã và đang đầu tư mạnh mẽ vào sản xuất tinh bột sắn với thương hiệu Tấn Tài được bạn hàng đánh giá cao về chất lượng.
        </p>
        
        <p>
          Công ty Tấn Tài không chỉ chú trọng vào chất lượng sản phẩm mà còn cam kết phát triển bền vững cùng bà con nông dân. Chúng tôi hỗ trợ kỹ thuật canh tác, đảm bảo giá thu mua ổn định và mang lại giá trị kinh tế bền vững cho cộng đồng.
        </p>
      </div>
    </>
  );

  return (
    <CategoryProductLayout 
      title={t("nav.products_items.tapioca")}
      heroImageUrl="/images/pages/category/TapiocaStarch/topiocastartch1.webp"
    >
      <ProductDetail 
        content={tapiocaContent}
        images={tapiocaImages}
        imageLayout="gallery"
      />
    </CategoryProductLayout>
  );
});

TapiocaPage.displayName = 'TapiocaPage';

export default TapiocaPage; 