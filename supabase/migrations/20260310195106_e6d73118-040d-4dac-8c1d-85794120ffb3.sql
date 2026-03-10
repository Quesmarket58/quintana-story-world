-- Create contact_submissions table
CREATE TABLE public.contact_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts (visitors submitting the form)
CREATE POLICY "Anyone can submit contact form"
  ON public.contact_submissions
  FOR INSERT
  WITH CHECK (true);

-- Only authenticated users can read submissions
CREATE POLICY "Authenticated users can read submissions"
  ON public.contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);

-- Create ebook storage bucket
INSERT INTO storage.buckets (id, name, public)
VALUES ('ebooks', 'ebooks', true);

-- Allow public read access to ebooks
CREATE POLICY "Ebooks are publicly accessible"
  ON storage.objects
  FOR SELECT
  USING (bucket_id = 'ebooks');

-- Allow authenticated users to upload ebooks
CREATE POLICY "Authenticated users can upload ebooks"
  ON storage.objects
  FOR INSERT
  WITH CHECK (bucket_id = 'ebooks');