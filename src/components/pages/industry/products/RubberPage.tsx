'use client';

import { memo } from 'react';
import { useLanguage } from "@/context/LanguageContext";
import IndustryProductLayout from "../IndustryProductLayout";
import ProductDetail from "../ProductDetail";

const RubberPage = memo(() => {
  const { t } = useLanguage();
  
  const rubberImages = [
    {
      src: '/images/pages/industry/NaturalRubber/naturalrubber1.webp',
      alt: 'Cao su thiên nhiên dạng khối chất lượng cao',
      width: 800,
      height: 600
    },
    {
      src: '/images/pages/industry/NaturalRubber/naturalrubber2.webp',
      alt: 'Quá trình thu hoạch mủ cao su tại đồn điền Tấn Tài',
      width: 800,
      height: 600
    },
    {
      src: '/images/pages/industry/NaturalRubber/bangnaturalrubber.webp',
      alt: 'Dây chuyền sản xuất cao su hiện đại của Tấn Tài',
      width: 800,
      height: 600
    }
  ];

  const rubberContent = (
    <>
      <h2 className="text-3xl font-bold mb-6 text-center">CAO SU THIÊN NHIÊN</h2>
      <h3 className="text-xl font-semibold mb-6 text-center text-muted-foreground">Thông tin chi tiết</h3>
      
      <div className="space-y-6">
        <p>
          Công ty Tấn Tài tự hào là một trong những đơn vị tiên phong trong sản xuất và cung ứng cao su thiên nhiên tại Việt Nam, với quy mô hoạt động lớn và chất lượng sản phẩm đạt tiêu chuẩn quốc tế. Chúng tôi hợp tác và sở hữu các đồn điền cao su trải rộng trên nhiều tỉnh thành, đảm bảo nguồn nguyên liệu bền vững và ổn định cho hoạt động sản xuất.
        </p>
        
        <p>
          Với diện tích lớn đồn điền cao su tại các khu vực có điều kiện khí hậu và thổ nhưỡng lý tưởng, Tấn Tài cam kết khai thác và sản xuất cao su thiên nhiên một cách bền vững, thân thiện với môi trường. Hệ thống nhà máy chế biến cao su của chúng tôi được trang bị dây chuyền sản xuất hiện đại, đáp ứng các tiêu chuẩn quốc tế.
        </p>
        
        <p>
          Quy trình sản xuất cao su tại Tấn Tài tuân thủ nghiêm ngặt các bước từ khai thác mủ cao su, xử lý, tinh chế đến đóng gói, nhằm đảm bảo sản phẩm đầu ra đạt chất lượng cao nhất. Chúng tôi ứng dụng công nghệ tiên tiến để kiểm soát độ đàn hồi, độ bền, độ sạch của sản phẩm, đáp ứng yêu cầu khắt khe của các ngành công nghiệp cao cấp như sản xuất lốp xe, dây chuyền sản xuất công nghiệp, và thiết bị y tế.
        </p>
        
        <p>
          Tấn Tài cung cấp các sản phẩm cao su thiên nhiên dạng khối chất lượng cao như: SVR 10, SVR 20, SVR 3L, SVR CV 50, SVR 5, SVR CV 60, SVR 10CV, Latex HA.
        </p>
      </div>
    </>
  );

  return (
    <IndustryProductLayout 
      title={t("nav.products_items.rubber")}
      heroImageUrl="/images/pages/industry/NaturalRubber/naturalrubber1.webp"
    >
      <ProductDetail 
        content={rubberContent}
        images={rubberImages}
        imageLayout="gallery"
      />
    </IndustryProductLayout>
  );
});

RubberPage.displayName = 'RubberPage';

export default RubberPage; 