class Post < ApplicationRecord
  belongs_to :category
  validates :title, :content, :category_id, presence: true
  mount_uploader :image, ImageUploader
end


# has_attached_file :image, styles: { medium: "300x300>", thumb: "100x100>" }
#   validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/
