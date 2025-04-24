'use client';

import { useLanguage } from "@/context/LanguageContext";
import MainLayout from "@/layouts/MainLayout";
import LazyImage from "@/components/LazyImage";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function About() {
  const { t } = useLanguage();
  
  const team = [
    {
      name: "Nguyễn Văn A",
      role: "CEO & Founder",
      image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=300",
      initials: "NVA"
    },
    {
      name: "Trần Thị B",
      role: "COO",
      image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=300",
      initials: "TTB"
    },
    {
      name: "Lê Văn C",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?auto=format&fit=crop&w=300",
      initials: "LVC"
    },
    {
      name: "Phạm Thị D",
      role: "CFO",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=300",
      initials: "PTD"
    }
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="pt-20 pb-16 md:py-32 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">Về Chúng Tôi</h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              Tantai Trading là công ty hàng đầu cung cấp giải pháp kinh doanh chuyên nghiệp tại Việt Nam. 
              Chúng tôi tận tâm giúp các doanh nghiệp phát triển và thành công.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <LazyImage 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800"
                alt="Tantai Trading office"
                className="rounded-lg shadow-lg"
                width={600}
                height={400}
              />
            </div>
            <div className="space-y-6">
              <h2 className="mb-4">Câu Chuyện Của Chúng Tôi</h2>
              <p className="text-muted-foreground">
                Được thành lập vào năm 2020, Tantai Trading bắt đầu với một tầm nhìn đơn giản: giúp các doanh nghiệp Việt Nam 
                khai thác tiềm năng đầy đủ của họ thông qua các giải pháp kinh doanh sáng tạo và hiệu quả.
              </p>
              <p className="text-muted-foreground">
                Từ những ngày đầu khiêm tốn với một nhóm nhỏ 5 thành viên, chúng tôi đã phát triển thành một công ty có hơn 50 
                chuyên gia tận tâm trong nhiều lĩnh vực khác nhau.
              </p>
              <p className="text-muted-foreground">
                Sứ mệnh của chúng tôi vẫn không thay đổi: cung cấp dịch vụ chất lượng cao, cá nhân hóa và hiệu quả giúp khách 
                hàng đạt được mục tiêu kinh doanh của họ.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="mb-3">Đội Ngũ Lãnh Đạo</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Nhóm lãnh đạo tài năng và đa dạng của chúng tôi, với kinh nghiệm rộng rãi trong nhiều lĩnh vực, 
              là nền tảng cho sự thành công của Tantai Trading.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-card rounded-lg p-6 text-center shadow-sm">
                <Avatar className="w-24 h-24 mx-auto mb-4">
                  <AvatarImage src={member.image} alt={member.name} />
                  <AvatarFallback>{member.initials}</AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="mb-3">Giá Trị Cốt Lõi</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Những giá trị này định hình mọi quyết định và hành động của chúng tôi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-4">Chính Trực</h3>
              <p className="text-muted-foreground">
                Chúng tôi đặt sự trung thực và minh bạch lên hàng đầu trong mọi tương tác với khách hàng và đối tác.
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-4">Đổi Mới</h3>
              <p className="text-muted-foreground">
                Chúng tôi không ngừng tìm kiếm những cách tiếp cận mới và sáng tạo để giải quyết các thách thức phức tạp.
              </p>
            </div>
            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="text-xl font-semibold mb-4">Xuất Sắc</h3>
              <p className="text-muted-foreground">
                Chúng tôi cam kết mang đến chất lượng tốt nhất trong mọi khía cạnh công việc của mình.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4">Hãy Cùng Chúng Tôi Phát Triển</h2>
          <p className="text-lg opacity-90 max-w-xl mx-auto mb-8">
            Tham gia nhóm của chúng tôi và là một phần của hành trình thành công.
          </p>
          <Button size="lg" variant="outline" className="border-2">
            Tìm Hiểu Cơ Hội Nghề Nghiệp
          </Button>
        </div>
      </section>
    </MainLayout>
  );
} 