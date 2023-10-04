import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { convertTimeFormat } from '../utils/ConvertTimeFormat';

function InfiniteScrollList() {
  // アイテムの状態を管理するステート変数
  const [items, setItems] = useState([]);

  // 次のページがあるかどうかを示すステート変数
  const [hasNext, setHasNext] = useState(true);
  
  // ローディング要素のDOM参照
  const loadingRef = useRef(null);

  // end_cursorの値を格納
  const endCursorRef = useRef(null);

  // 追加アイテムを読み込む
  const fetchMoreItems = async () => {
    try {
      if (!hasNext) return;

      // afterクエリにend_cursorの値を利用してリクエストを送信
      const afterParam = endCursorRef.current || '';
      const response = await axios.get(`http://localhost:1323/?after=${afterParam}`);
      const data = response.data;
      
      // 取得したデータから重複するアイテムをフィルタリング
      const items = data.posts.filter((post) => post.id !== afterParam)
       
      const newItems = convertTimeFormat(items);

      // アイテムのリストを更新
      setItems((prevItems) => [...prevItems, ...newItems]);
      setHasNext(data.has_next);

      if (data.end_cursor) {
        // 新しいend_cursorの値をendCursorRefに格納
        endCursorRef.current = data.end_cursor;
      }
    } catch (error) {
      console.error('データの取得に失敗しました:', error);
    }
  };

  // IntersectionObserverのコールバック
  const handleIntersection = (entries) => {
    if (entries[0].isIntersecting) {
      // ローディング要素がビューポート内に入った場合、新しいアイテムを読み込む
      fetchMoreItems();
    }
  };

  useEffect(() => {
    // IntersectionObserverの設定
    const intersectionObserver = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: '0px',
      threshold: 1,
    });

    if (loadingRef.current) {
      // ローディング要素をIntersectionObserverに登録
      intersectionObserver.observe(loadingRef.current);
    }

    // IntersectionObserverを解除
    return () => {
      intersectionObserver.disconnect();
    };
  }, []);

  return (
    <div>
      <div className='flex flex-col gap-10'>
        {items.map((item, index) => (
            <div key={item + index} className='px-4'>
              <div className='flex justify-center items-center'>
                <img src={item.thumbnail_url} alt={item.title} className='w-full'/>
              </div>
              <h2 className='font-BIZUDPGothic text-base font-bold leading-[1.5rem] pt-4'>{item.title}</h2>
              <p className='font-BIZUDPGothic text-sm font-normal leading-[1.25rem] py-2'>{item.description}</p>
              <p className='font-BIZUDPGothic text-xs font-normal leading-[1.125rem] text-[#A0A0A0]'>{item.created_at}</p>
            </div>
        ))}
      </div>

      {hasNext ? (
        <div ref={loadingRef}>
          ロード中...
        </div>
      ) : (
        <p>利用可能なデータはありません。</p>
      )}
    </div>
  );
}

export default InfiniteScrollList;
