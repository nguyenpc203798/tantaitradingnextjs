'use client';

import { memo } from 'react';
import { useLanguage } from "@/context/LanguageContext";
import IndustryProductLayout from "../IndustryProductLayout";
import ProductDetail from "../ProductDetail";

const PepperPage = memo(() => {
  const { t } = useLanguage();
  
  const pepperImages = [
    {
      src: '/images/pages/industry/Pepper/pepper1.webp',
      alt: 'Hạt tiêu đen chất lượng cao của Tấn Tài',
      width: 800,
      height: 600
    },
    {
      src: '/images/pages/industry/Pepper/pepper2.webp',
      alt: 'Quy trình thu hoạch và phơi sấy tiêu tại vùng nguyên liệu',
      width: 800,
      height: 600
    },
    {
      src: '/images/pages/industry/Pepper/pepper3.webp',
      alt: 'Dây chuyền sàng lọc và đóng gói tiêu xuất khẩu',
      width: 800,
      height: 600
    }
  ];

  const pepperContent = (
    <>
      <h2 className="text-3xl font-bold mb-6 text-center">TIÊU ĐEN</h2>
      <h3 className="text-xl font-semibold mb-6 text-center text-muted-foreground">Thông tin chi tiết</h3>
      
      <div className="space-y-6">
        <p>
          Tấn Tài Trading là một trong những doanh nghiệp hàng đầu trong lĩnh vực thu mua, chế biến và xuất khẩu tiêu đen tại Việt Nam. Với vùng nguyên liệu rộng lớn tại các tỉnh Đắk Lắk, Đắk Nông, Bình Phước, Đồng Nai và Bà Rịa-Vũng Tàu - những vùng trồng tiêu truyền thống của Việt Nam, chúng tôi tự hào cung cấp sản phẩm tiêu đen chất lượng cao cho thị trường quốc tế.
        </p>
        
        <p>
          Tiêu đen Việt Nam nổi tiếng thế giới nhờ hương thơm đặc trưng, vị cay nồng và hàm lượng tinh dầu cao (2.5-3.5%). Tấn Tài chỉ thu mua tiêu từ những vườn tiêu đạt tiêu chuẩn, được chăm sóc kỹ lưỡng và thu hoạch đúng thời điểm để đảm bảo chất lượng tối ưu. Sau khi thu hoạch, tiêu được xử lý qua các công đoạn phơi sấy, làm sạch, phân loại và đóng gói theo tiêu chuẩn xuất khẩu nghiêm ngặt.
        </p>
        
        <p>
          Chúng tôi cung cấp đa dạng sản phẩm tiêu, bao gồm tiêu đen nguyên hạt, tiêu đen xay, tiêu trắng nguyên hạt, tiêu trắng xay và các sản phẩm tiêu đặc biệt theo yêu cầu. Các sản phẩm được phân loại theo nhiều tiêu chuẩn chất lượng khác nhau như ASTA (500g/l, 550g/l, 580g/l), GL (Singapore), MC (độ ẩm), tỷ lệ tạp chất và kích thước hạt.
        </p>
        
        <p>
          Với hệ thống nhà máy chế biến hiện đại đạt chuẩn HACCP, ISO 22000, BRC và KOSHER, Tấn Tài đảm bảo sản phẩm tiêu đáp ứng các tiêu chuẩn an toàn vệ sinh thực phẩm khắt khe nhất. Chúng tôi tiến hành kiểm nghiệm nghiêm ngặt về hàm lượng Salmonella, E. Coli, Ochratoxin, Aflatoxin và dư lượng thuốc bảo vệ thực vật để đảm bảo an toàn cho người tiêu dùng.
        </p>
        
        <p>
          Hiện nay, tiêu đen của Tấn Tài được xuất khẩu đến hơn 80 quốc gia trên thế giới, trong đó có các thị trường khó tính như Mỹ, EU, Nhật Bản, Hàn Quốc và Trung Đông. Tiêu của chúng tôi được các nhà sản xuất thực phẩm, công ty gia vị và nhà phân phối lớn tin dùng nhờ chất lượng ổn định và dịch vụ chuyên nghiệp.
        </p>
        
        <p>
          Tấn Tài không ngừng đầu tư vào công nghệ chế biến và kiểm soát chất lượng, đồng thời cam kết phát triển bền vững thông qua các chương trình hỗ trợ nông dân canh tác hữu cơ, sử dụng các phương pháp trồng trọt bền vững và thân thiện với môi trường. Chúng tôi tự hào góp phần đưa tiêu Việt Nam trở thành thương hiệu được công nhận trên thị trường quốc tế.
        </p>
      </div>
    </>
  );

  return (
    <IndustryProductLayout 
      title={t("nav.products_items.pepper") || "TIÊU ĐEN"}
      heroImageUrl="/images/pages/industry/Pepper/pepper1.webp"
    >
      <ProductDetail 
        content={pepperContent}
        images={pepperImages}
        imageLayout="gallery"
      />
    </IndustryProductLayout>
  );
});

PepperPage.displayName = 'PepperPage';

export default PepperPage; 