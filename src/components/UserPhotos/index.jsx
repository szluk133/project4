import React from "react";
import { Typography, List, ListItem, ListItemText, ListItemIcon, Avatar, Link } from "@mui/material";
import { useParams } from "react-router-dom";
import { models } from '../modelData';

// Hàm lọc tên ảnh chứa tên người dùng
function filterImageFiles(imageFiles, firstName) {
    const lowercaseFirstName = firstName.toLowerCase();
    return imageFiles.filter(fileName => fileName.includes(lowercaseFirstName));
}

function UserPhotos() {
    const { userId } = useParams();
    const [photos, setPhotos] = React.useState([]);
    const [user, setUser] = React.useState(null);
    const imageFiles = ["kenobi1.jpg", "kenobi2.jpg", "skywalker1.jpg", "skywalker2.jpg"]; // Danh sách các tệp ảnh, thay thế bằng đường dẫn tương ứng trong dự án của bạn

    React.useEffect(() => {
        const fetchData = async () => {
            // Lấy thông tin người dùng từ model
            const userDetail = await models.userModel(userId);
            setUser(userDetail);
            // Lọc danh sách các tệp ảnh của người dùng hiện tại
            const userImages = filterImageFiles(imageFiles, userDetail.first_name);
            setPhotos(userImages);
        };

        fetchData();
    }, [userId]);

    return (
        <div>
            <Typography variant="h6">User Photos</Typography>
            {photos.length > 0 ? (
                <List>
                    {photos.map((photo, index) => (
                        <ListItem key={index}>
                            <ListItemIcon>
                                <Avatar alt={user ? `${user.first_name} ${user.last_name}` : "User Avatar"} src={`/images/${photo}`} />
                            </ListItemIcon>
                            <ListItemText primary={photo} />
                            <Typography variant="caption">{new Date().toLocaleString()}</Typography> {/* Thời gian tạo ảnh, chỉ là ví dụ */}
                            {/* Hiển thị comment của mỗi ảnh */}
                            {/* Đặt tên cho các comment theo định dạng "Comment n" */}
                            {Array.from({ length: 3 }, (_, i) => (
                                <div key={i}>
                                    <Typography variant="caption">Comment {i + 1}</Typography>
                                    <Typography variant="caption">{new Date().toLocaleString()}</Typography> {/* Thời gian tạo comment, chỉ là ví dụ */}
                                    <Link to={`/users/${userId}`}>{user ? `${user.first_name} ${user.last_name}` : "Unknown User"}</Link>: {/* Link đến trang UserDetail của người tạo comment */}
                                    <Typography variant="body2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget dolor vel libero efficitur vulputate.</Typography> {/* Nội dung comment, chỉ là ví dụ */}
                                </div>
                            ))}
                        </ListItem>
                    ))}
                </List>
            ) : (
                <Typography variant="body1">No photos found for this user.</Typography>
            )}
        </div>
    );
}

export default UserPhotos;
