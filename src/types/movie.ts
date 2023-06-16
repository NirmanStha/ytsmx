export interface MovieDetails {
    id:                        number;
    url:                       string;
    imdb_code:                 string;
    title:                     string;
    title_english:             string;
    title_long:                string;
    slug:                      string;
    year:                      number;
    rating:                    number;
    runtime:                   number;
    genres:                    string[];
    download_count:            number;
    like_count:                number;
    description_intro:         string;
    description_full:          string;
    yt_trailer_code:           string;
    language:                  string;
    mpa_rating:                string;
    background_image:          string;
    background_image_original: string;
    small_cover_image:         string;
    medium_cover_image:        string;
    large_cover_image:         string;
    torrents:                  Torrent[];
    date_uploaded:             Date;
    date_uploaded_unix:        number;
}

export interface Torrent {
    url:                string;
    hash:               string;
    quality:            Quality;
    type:               Type;
    seeds:              number;
    peers:              number;
    size:               string;
    size_bytes:         number;
    date_uploaded:      Date;
    date_uploaded_unix: number;
}

export type Quality = "720p" | "1080p";

export type Type = "bluray" | "web";