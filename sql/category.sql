/*
Navicat MySQL Data Transfer

Source Server         : 连接
Source Server Version : 50720
Source Host           : localhost:3306
Source Database       : blog

Target Server Type    : MYSQL
Target Server Version : 50720
File Encoding         : 65001

Date: 2018-03-14 18:04:27
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for category
-- ----------------------------
DROP TABLE IF EXISTS `category`;
CREATE TABLE `category` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `parent_id` int(10) DEFAULT NULL COMMENT '父目录ID',
  `name` varchar(100) NOT NULL DEFAULT '' COMMENT '目录名称',
  `url` varchar(100) DEFAULT NULL COMMENT '点击目录跳转的url',
  `create_time` datetime DEFAULT NULL COMMENT '创建时间',
  `update_time` datetime DEFAULT NULL COMMENT '更新时间',
  `del_flag` int(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of category
-- ----------------------------
INSERT INTO `category` VALUES ('1', '0', '技术随笔', null, '2018-03-14 15:59:16', '2018-03-14 15:59:19', '0');
INSERT INTO `category` VALUES ('2', '1', 'java', null, '2018-03-14 15:59:16', '2018-03-14 15:59:19', '0');
INSERT INTO `category` VALUES ('3', '1', '前端', null, '2018-03-14 15:59:16', '2018-03-14 15:59:19', '0');
INSERT INTO `category` VALUES ('4', '1', '大数据', null, '2018-03-14 15:59:16', '2018-03-14 15:59:19', '0');
INSERT INTO `category` VALUES ('5', '1', 'linux', null, '2018-03-14 15:59:16', '2018-03-14 15:59:19', '0');
INSERT INTO `category` VALUES ('6', '0', '生活随笔', null, '2018-03-14 15:59:16', '2018-03-14 15:59:19', '0');
INSERT INTO `category` VALUES ('7', '6', '开心一刻', null, '2018-03-14 15:59:16', '2018-03-14 15:59:19', '0');
INSERT INTO `category` VALUES ('8', '6', '逗乐视频', null, '2018-03-14 15:59:16', '2018-03-14 15:59:19', '0');
INSERT INTO `category` VALUES ('9', '6', '全民相册', null, '2018-03-14 15:59:16', '2018-03-14 15:59:19', '0');
INSERT INTO `category` VALUES ('10', '0', '工作随笔', null, '2018-03-14 15:59:16', '2018-03-14 15:59:19', '0');
INSERT INTO `category` VALUES ('11', '10', '工作点滴', null, '2018-03-14 15:59:16', '2018-03-14 15:59:19', '0');
