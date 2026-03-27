/** Curated free stock (Unsplash / Pexels) — high-res product photography */
export function unsplashPhoto(id: string) {
  return `https://images.unsplash.com/photo-${id}?w=800&q=85&auto=format&fit=crop`;
}

export function pexelsPhoto(id: number) {
  return `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&fit=crop`;
}

/** Hero / marketing — dried fruit & nuts spread */
export const heroImageUrl = unsplashPhoto("1571771894821-ce9b6c11b08e");
