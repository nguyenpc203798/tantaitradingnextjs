'use client';

import { memo } from 'react';
import { useLanguage } from "@/context/LanguageContext";
import IndustryProductLayout from "../IndustryProductLayout";
import ProductDetail from "../ProductDetail";

const CashewPage = memo(() => {
  const { t } = useLanguage();
  
  const cashewImages = [
    {
      src: '/images/pages/industry/Cashew/cashew1.webp',
      alt: 'Hạt điều thành phẩm cao cấp của Tấn Tài',
      width: 800,
      height: 600
    },
    {
      src: '/images/pages/industry/Cashew/cashew2.webp',
      alt: 'Quy trình chế biến hạt điều tại nhà máy Tấn Tài',
      width: 800,
      height: 600
    },
    {
      src: '/images/pages/industry/Cashew/cashew3.webp',
      alt: 'Đóng gói hạt điều xuất khẩu theo tiêu chuẩn quốc tế',
      width: 800,
      height: 600
    }
  ];

  const cashewContent = (
    <>
      <h2 className="text-3xl font-bold mb-6 text-center">HẠT ĐIỀU</h2>
      <h3 className="text-xl font-semibold mb-6 text-center text-muted-foreground">Thông tin chi tiết</h3>
      
      <div className="space-y-6">
        <p>
          Tấn Tài Trading tự hào là một trong những đơn vị hàng đầu trong lĩnh vực sản xuất và xuất khẩu hạt điều chất lượng cao tại Việt Nam. Chúng tôi sở hữu vùng nguyên liệu rộng lớn và hệ thống nhà máy chế biến hiện đại, đảm bảo kiểm soát chất lượng từ vườn cây đến sản phẩm cuối cùng.
        </p>
        
        <p>
          Hạt điều của Tấn Tài được canh tác tại các vùng đất đỏ bazan màu mỡ tại Tây Nguyên và Đông Nam Bộ - nơi có điều kiện khí hậu và thổ nhưỡng lý tưởng cho cây điều sinh trưởng và phát triển. Chúng tôi áp dụng quy trình canh tác bền vững, hạn chế sử dụng phân bón hóa học và thuốc trừ sâu, đảm bảo an toàn cho người tiêu dùng và thân thiện với môi trường.
        </p>
        
        <p>
          Quy trình chế biến hạt điều tại Tấn Tài được triển khai nghiêm ngặt với dây chuyền công nghệ hiện đại từ khâu thu mua, sơ chế, tách vỏ, tách màng, sấy khô, phân loại đến đóng gói. Chúng tôi tuân thủ các tiêu chuẩn an toàn thực phẩm quốc tế như HACCP, ISO 22000, BRC, và FDA, nhằm đảm bảo sản phẩm đạt chất lượng cao nhất.
        </p>
        
        <p>
          Sản phẩm hạt điều của Tấn Tài đa dạng về kích cỡ và phân loại, từ hạt nguyên vẹn (W180, W210, W240, W320, W450) đến hạt vỡ đôi (SW, LBW), hạt vỡ (LP, SP, BB) tùy theo nhu cầu sử dụng của khách hàng. Hạt điều của chúng tôi có đặc điểm nổi bật là vị ngọt, béo, thơm, màu sắc đẹp và đồng đều, tỷ lệ hạt trắng cao.
        </p>
        
        <p>
          Hiện nay, sản phẩm hạt điều của Tấn Tài được xuất khẩu đến nhiều thị trường khó tính như Mỹ, EU, Nhật Bản, Hàn Quốc và Trung Đông. Chúng tôi liên tục nghiên cứu và cải tiến quy trình, chất lượng để đáp ứng tốt hơn nhu cầu ngày càng cao của khách hàng trên toàn cầu.
        </p>
      </div>
    </>
  );

  return (
    <IndustryProductLayout 
      title={t("nav.products_items.cashew") || "HẠT ĐIỀU"}
      heroImageUrl="/images/pages/industry/Cashew/cashew1.webp"
    >
      <ProductDetail 
        content={cashewContent}
        images={cashewImages}
        imageLayout="gallery"
      />
    </IndustryProductLayout>
  );
});

CashewPage.displayName = 'CashewPage';

export default CashewPage; 