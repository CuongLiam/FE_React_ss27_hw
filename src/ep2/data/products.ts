import type { Product } from "../types/product";

const products: Product[] = [
  {
    id: "1",
    name: "Laptop Dell XPS 13",
    price: 35000000,
    description: "Laptop cao cấp với thiết kế mỏng nhẹ.",
    longDescription:
      "Laptop Dell XPS 13 có màn hình sắc nét, khung máy kim loại cao cấp, hiệu năng ổn định cho công việc hàng ngày và đồ họa nhẹ. Thời lượng pin tốt, bàn phím thoải mái và trọng lượng nhẹ thuận tiện di chuyển.",
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1200&q=60",
  },
  {
    id: "2",
    name: "iPhone 14 Pro",
    price: 30000000,
    description: "Điện thoại cao cấp, camera chuyên nghiệp.",
    longDescription:
      "iPhone 14 Pro mang lại trải nghiệm mượt mà, chụp ảnh xuất sắc, hiệu năng hàng đầu và hệ sinh thái ứng dụng phong phú. Thiết kế sang trọng và màn hình OLED rực rỡ.",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&q=60",
  },
  {
    id: "3",
    name: "Samsung Galaxy S22",
    price: 25000000,
    description: "Smartphone Android mạnh mẽ, màn hình đẹp.",
    longDescription:
      "Samsung Galaxy S22 sở hữu camera tốt, màn hình nhạy, hiệu năng đủ mạnh cho đa nhiệm và chơi game. Thiết kế hiện đại và nhiều tính năng tiện ích.",
    image:
      "https://images.unsplash.com/photo-1510557880182-3df3f24c6b00?auto=format&fit=crop&w=1200&q=60",
  },
  {
    id: "4",
    name: "Tai nghe Sony WH-1000XM4",
    price: 7000000,
    description: "Tai nghe chống ồn cao cấp.",
    longDescription:
      "Sony WH-1000XM4 có khả năng chống ồn chủ động tuyệt vời, âm thanh chi tiết và đeo thoải mái trong thời gian dài. Pin lâu và nhiều tùy chỉnh qua ứng dụng.",
    image:
      "https://images.unsplash.com/photo-1519669556871-3fdc2b45f2b2?auto=format&fit=crop&w=1200&q=60",
  },
  {
    id: "5",
    name: "Apple Watch Series 8",
    price: 12000000,
    description: "Đồng hồ thông minh hỗ trợ sức khỏe.",
    longDescription:
      "Apple Watch Series 8 theo dõi sức khỏe, tập luyện và thông báo thông minh. Thiết kế đẹp, dễ sử dụng và tích hợp sâu với iPhone.",
    image:
      "https://images.unsplash.com/photo-1541534401786-1a27f57be3b9?auto=format&fit=crop&w=1200&q=60",
  },
];

export default products;