-- R K Florist schema + seed data for Supabase
-- Paste this into the Supabase SQL editor and run it once.

create table if not exists products (
  id text primary key,
  name text not null,
  category text not null,
  price numeric not null,
  description text not null,
  image text not null,
  tags text[] not null default '{}',
  bestseller boolean not null default false
);

create table if not exists event_packages (
  id text primary key,
  name text not null,
  category text not null,
  price text not null,
  duration text not null,
  description text not null,
  inclusions text[] not null default '{}',
  image text not null,
  popular boolean not null default false
);

create table if not exists gallery_items (
  id text primary key,
  title text not null,
  category text not null,
  image text not null,
  description text not null
);

create table if not exists booked_dates (
  date date primary key
);

create table if not exists contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text,
  subject text,
  message text not null,
  created_at timestamptz not null default now()
);

create table if not exists quote_requests (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text not null,
  event_date date not null,
  event_type text not null,
  guest_count integer not null,
  budget text,
  theme text,
  message text,
  created_at timestamptz not null default now()
);

create table if not exists orders (
  id uuid primary key default gen_random_uuid(),
  items jsonb not null,
  total numeric not null default 0,
  status text not null default 'placed',
  created_at timestamptz not null default now()
);

alter table products enable row level security;
alter table event_packages enable row level security;
alter table gallery_items enable row level security;
alter table booked_dates enable row level security;
alter table contact_messages enable row level security;
alter table quote_requests enable row level security;
alter table orders enable row level security;

drop policy if exists "Public read products" on products;
create policy "Public read products" on products for select using (true);

drop policy if exists "Public read event packages" on event_packages;
create policy "Public read event packages" on event_packages for select using (true);

drop policy if exists "Public read gallery" on gallery_items;
create policy "Public read gallery" on gallery_items for select using (true);

drop policy if exists "Public read booked dates" on booked_dates;
create policy "Public read booked dates" on booked_dates for select using (true);

drop policy if exists "Public insert contact messages" on contact_messages;
create policy "Public insert contact messages" on contact_messages for insert with check (true);

drop policy if exists "Public insert quote requests" on quote_requests;
create policy "Public insert quote requests" on quote_requests for insert with check (true);

drop policy if exists "Public insert orders" on orders;
create policy "Public insert orders" on orders for insert with check (true);

insert into products (id, name, category, price, description, image, tags, bestseller) values
  ('classic-rose-bouquet', 'Classic Rose Bouquet', 'Bouquets', 499, 'A timeless arrangement of 12 fresh red roses wrapped in premium paper. Perfect for anniversaries, birthdays, or any special occasion.', 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80', array['Roses','Red','Anniversary'], true),
  ('sunshine-mix', 'Sunshine Mix', 'Bouquets', 399, 'Bright yellow sunflowers and white daisies bundled together to bring instant cheer to any room.', 'https://images.unsplash.com/photo-1520763185298-1b434c919102?w=800&q=80', array['Sunflowers','Yellow','Cheerful'], false),
  ('pink-peony-blush', 'Pink Peony Blush', 'Bouquets', 799, 'Soft pink peonies with delicate filler flowers, arranged in a romantic pastel palette.', 'https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=800&q=80', array['Peonies','Pink','Romantic'], true),
  ('white-lily-elegance', 'White Lily Elegance', 'Bouquets', 599, 'Pure white lilies with subtle greenery, symbolizing peace and elegance for any occasion.', 'https://images.unsplash.com/photo-1591886960571-74d43a9d4166?w=800&q=80', array['Lilies','White','Elegant'], false),
  ('lavender-dreams', 'Lavender Dreams', 'Bouquets', 649, 'Purple lavender and white hydrangeas create a calming, dreamy arrangement with a soft fragrance.', 'https://images.unsplash.com/photo-1572454591674-2739f30d69e4?w=800&q=80', array['Lavender','Purple','Fragrant'], false),
  ('tropical-paradise', 'Tropical Paradise', 'Bouquets', 899, 'Exotic birds of paradise and heliconia in vibrant tropical colors for a bold statement.', 'https://images.unsplash.com/photo-1572886044150-5d5f4a9d2f4b?w=800&q=80', array['Exotic','Tropical','Colorful'], false),
  ('monstera-deliciosa', 'Monstera Deliciosa', 'Plants', 349, 'A healthy monstera plant in a decorative pot. Easy to care for and adds a tropical feel to any space.', 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=800&q=80', array['Indoor','Easy Care','Tropical'], false),
  ('peace-lily', 'Peace Lily', 'Plants', 299, 'An elegant peace lily with glossy leaves and white blooms. Known for its air-purifying qualities.', 'https://images.unsplash.com/photo-1593691509543-c55f24c2e59b?w=800&q=80', array['Indoor','Air Purifying','White Blooms'], false),
  ('orchid-collection', 'Orchid Collection', 'Plants', 549, 'A stunning potted orchid with delicate blooms. A graceful gift for someone special.', 'https://images.unsplash.com/photo-1566928039229-8d5f2c5f0b5e?w=800&q=80', array['Orchid','Delicate','Gift'], false),
  ('succulent-garden', 'Succulent Garden', 'Plants', 249, 'A charming collection of mini succulents in a wooden planter. Low maintenance and adorable.', 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=800&q=80', array['Succulent','Low Maintenance','Mini'], false),
  ('snake-plant', 'Snake Plant', 'Plants', 199, 'A hardy snake plant that thrives in low light. Perfect for beginners and busy lifestyles.', 'https://images.unsplash.com/photo-1598880940080-ff9a29891b85?w=800&q=80', array['Indoor','Hardy','Low Light'], false),
  ('chocolate-box', 'Gourmet Chocolate Box', 'Gifts', 449, 'An assortment of premium chocolates in an elegant gift box. A sweet treat for any celebration.', 'https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=800&q=80', array['Chocolates','Sweet','Box'], false),
  ('teddy-bear', 'Cuddly Teddy Bear', 'Gifts', 399, 'A soft, huggable teddy bear that pairs perfectly with any bouquet.', 'https://images.unsplash.com/photo-1559454403-b8fb88521f11?w=800&q=80', array['Teddy','Soft','Cute'], false),
  ('scented-candle', 'Scented Candle Set', 'Gifts', 349, 'A set of three aromatic candles in calming scents. Create a relaxing atmosphere at home.', 'https://images.unsplash.com/photo-1602874801006-e26c8c0d6b2e?w=800&q=80', array['Candles','Aromatic','Set'], false),
  ('photo-frame', 'Memory Photo Frame', 'Gifts', 199, 'A beautiful wooden photo frame to display your most cherished memories.', 'https://images.unsplash.com/photo-1578500464564-a42b7d9a6d69?w=800&q=80', array['Frame','Wooden','Memories'], false)
on conflict (id) do nothing;

insert into event_packages (id, name, category, price, duration, description, inclusions, image, popular) values
  ('dream-wedding', 'Dream Wedding', 'Wedding', '₹45,000 onwards', 'Full Day', 'A complete floral transformation for your wedding day, from the mandap to the reception.', array['Bridal bouquet and bridesmaid bouquets','Mandap and stage floral decor','Venue entrance and aisle setup','Table centerpieces for up to 100 guests','Dedicated florist on-site'], 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1200&q=80', true),
  ('garden-wedding', 'Garden Wedding', 'Wedding', '₹60,000 onwards', 'Full Day', 'An outdoor wedding setup with lush greenery and seasonal flowers for a natural, romantic look.', array['Outdoor arch and aisle decor','Greenery and floral installations','Reception table styling','Welcome area setup','On-site coordination'], 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80', false),
  ('birthday-bash', 'Birthday Bash', 'Birthday', '₹12,000 onwards', '4-6 Hours', 'Make every birthday memorable with themed decorations, balloon arches, and stunning floral arrangements.', array['Themed balloon arch','Cake table styling','Entrance decoration','Photo booth backdrop','Table centerpieces'], 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1200&q=80', true),
  ('kids-birthday', 'Kids Birthday', 'Birthday', '₹8,000 onwards', '3-4 Hours', 'Colorful and fun decorations that bring your child''s favorite theme to life.', array['Character-themed backdrop','Balloon cluster','Party table decor','Welcome banner','Goodie bag styling'], 'https://images.unsplash.com/photo-1558636508-e0db3814bd1d?w=1200&q=80', false),
  ('golden-anniversary', 'Golden Anniversary', 'Anniversary', '₹18,000 onwards', '5-7 Hours', 'Celebrate enduring love with elegant gold and ivory floral arrangements and romantic styling.', array['Romantic table setting','Gold and ivory centerpieces','Memory lane photo display','Cake table decor','Ambient lighting setup'], 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=1200&q=80', true),
  ('silver-anniversary', 'Silver Anniversary', 'Anniversary', '₹15,000 onwards', '4-6 Hours', 'A sophisticated celebration with silver accents, white florals, and timeless elegance.', array['Silver and white florals','Elegant backdrop','Dinner table styling','Champagne tower setup','Keepsake floral arrangement'], 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1200&q=80', false)
on conflict (id) do nothing;

insert into gallery_items (id, title, category, image, description) values
  ('royal-wedding-decor', 'Royal Wedding Decor', 'Wedding', 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1200&q=80', 'A grand wedding setup with marigold and rose garlands.'),
  ('pastel-birthday', 'Pastel Birthday Celebration', 'Birthday', 'https://images.unsplash.com/photo-1502781252888-9143ba7f074e?w=1200&q=80', 'Soft pastel theme for a sweet sixteen celebration.'),
  ('garden-anniversary', 'Garden Anniversary', 'Anniversary', 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=1200&q=80', 'Outdoor anniversary setup with white roses and greenery.'),
  ('bridal-bouquet', 'Bridal Bouquet', 'Bouquets', 'https://images.unsplash.com/photo-1522748906250-160e28b4d3c1?w=1200&q=80', 'Custom bridal bouquet with white roses and peonies.'),
  ('corporate-event', 'Corporate Event', 'Anniversary', 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1200&q=80', 'Elegant stage setup for a corporate anniversary gala.'),
  ('kids-party', 'Kids Birthday Party', 'Birthday', 'https://images.unsplash.com/photo-1566415758026-50b3e7322db8?w=1200&q=80', 'Colorful theme party with balloons and floral accents.'),
  ('table-centerpiece', 'Table Centerpiece', 'Bouquets', 'https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=1200&q=80', 'Elegant centerpiece arrangement for a dinner event.'),
  ('engagement-stage', 'Engagement Stage', 'Wedding', 'https://images.unsplash.com/photo-1519340241574-2cec6aef0c01?w=1200&q=80', 'Floral stage design for an intimate engagement ceremony.')
on conflict (id) do nothing;

insert into booked_dates (date) values
  ('2026-09-27'),
  ('2026-10-04'),
  ('2026-10-11'),
  ('2026-10-18'),
  ('2026-10-25'),
  ('2026-11-01'),
  ('2026-11-08'),
  ('2026-11-14'),
  ('2026-11-22'),
  ('2026-11-29'),
  ('2026-12-06'),
  ('2026-12-13'),
  ('2026-12-20'),
  ('2026-12-25'),
  ('2026-12-31')
on conflict (date) do nothing;
