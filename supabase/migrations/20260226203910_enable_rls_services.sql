alter table services enable row level security;
alter table services_request enable row level security;

create policy "Public can read services"
on services
for select
to anon
using (true);

create policy "Anyone can insert service request"
on services_request
for insert
to anon
with check (true);

create policy "Admin can read all requests"
on services_request
for select
to authenticated
using (true);