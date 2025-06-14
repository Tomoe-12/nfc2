import { Calendar, Expand, Package, Palette, Shirt, Store } from "lucide-react";

const productDetails = [
  {
    id: 1,
    icon: Calendar,
    label: "Launch Date",
    value: "2025-2-12",
  },
  {
    id: 2,
    icon: Expand,
    label: "Size",
    value: "S",
  },
  {
    id: 3,
    icon: Palette,
    label: "Color",
    value: "Midnight Black",
  },
  {
    id: 4,
    icon: Shirt,
    label: "Material",
    value: "Premium Cotton",
  },
  {
    id: 5,
    icon: Package,
    label: "Weight",
    value: "180g",
  },
  {
    id: 6,
    icon: Store,
    label: "Purchased From",
    value: "SanShin",
    hasLink: true,
  },
];

export default productDetails;